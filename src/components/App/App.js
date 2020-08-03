import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Route } from 'react-router';
import {
  SET_FAVORITES, TOGGLE_FAVORITES, INCREASE_PAGE_COUNT, RESET_PAGE_NUMBER,
} from '../../constants/actionTypes';
import BeerApi from '../../API/BeerApi';
import AppContext from '../../contexts/AppContext';
import BeerDetails from '../BeerDetails/BeerDetails';

import toggle from '../../helpers/toggle';
import MainPage from '../MainPage/MainPage';
import FavoritePage from '../FavoritePage/FavoritePage';

const appState = {
  favoriteBeerIds: [],
  beerApi: new BeerApi(),
  pageNumber: 1,
};

/**
 * @param {number[]} favoriteBeerIds
 * @param {number} id
 * @return {number[]}
 */
const toggleFavorites = (favoriteBeerIds, id) => {
  const result = toggle(favoriteBeerIds, id);
  window.localStorage.setItem('favoriteBeerIds', JSON.stringify(result));

  return result;
};

/**
 * @return {number[]}
 */
const setFavoriteBeers = () => {
  const favoriteBeerIdsLs = window.localStorage.getItem('favoriteBeerIds');
  return favoriteBeerIdsLs ? JSON.parse(favoriteBeerIdsLs) : [];
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, favoriteBeerIds: toggleFavorites(state.favoriteBeerIds, action.beer.id) };
    case SET_FAVORITES:
      return { ...state, favoriteBeerIds: setFavoriteBeers() };
    case INCREASE_PAGE_COUNT:
      return { ...state, pageNumber: state.pageNumber + 1 };
    case RESET_PAGE_NUMBER:
      return { ...state, pageNumber: 1 };
    default:
      return 'Error';
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, appState);

  useEffect(() => {
    dispatch({
      type: SET_FAVORITES,
    });
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <Router>
        <Route
          exact
          path="/beer/:id"
          render={() => <BeerDetails />}
        />
        <Route
          exact
          path="/favorites"
          render={() => <FavoritePage />}
        />
        <Route
          exact
          path="/"
          render={() => <MainPage />}
        />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
