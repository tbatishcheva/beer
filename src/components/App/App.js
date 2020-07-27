import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Route } from 'react-router';
import { SET_FAVORITES, TOGGLE_FAVORITES } from '../../constants/actionTypes';
import BeerApi from '../../API/BeerApi';
import AppContext from '../../contexts/AppContext';
import BeerDetails from '../BeerDetails/BeerDetails';

import toggle from '../../helpers/toggle';
import MainPage from '../MainPage/MainPage';
import FavoritePage from '../FavoritePage/FavoritePage';

const appState = {
  favoriteBeerIds: [],
  beerApi: new BeerApi(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      const favoriteBeerIds = toggle(state.favoriteBeerIds, action.beer.id);
      window.localStorage.setItem('favoriteBeerIds', JSON.stringify(favoriteBeerIds));
      return {
        ...state,
        favoriteBeerIds,
      };
    case SET_FAVORITES:
      const favoriteBeerIdsLs = window.localStorage.getItem('favoriteBeerIds');
      return {
        ...state,
        favoriteBeerIds: favoriteBeerIdsLs ? JSON.parse(favoriteBeerIdsLs) : [],
      };
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
