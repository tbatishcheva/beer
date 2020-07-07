import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Route } from 'react-router';
import AppContext from '../../contexts/AppContext';
import beers from '../../data/beers.json';
import Beer from '../../models/Beer';
import BeerDetails from '../BeerDetails/BeerDetails';
import { TOGGLE_FAVORITES } from '../constants/actionTypes';
import toggle from '../../helpers/toggle';
import MainPage from '../MainPage/MainPage';
import FavoritePage from '../FavoritePage/FavoritePage';

const appState = {
  beers: beers.map((b) => new Beer(b)),
  favoriteBeers: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        favoriteBeers:
            toggle(state.favoriteBeers, action.beer.id),
      };
    default:
      return 'Error';
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, appState);

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
