import React, {
  useCallback,
  useContext, useEffect, useReducer,
} from 'react';
import Beer from '../../models/Beer';
import FavoritePageContext from '../../contexts/FavoritePageContext';
import styles from './FavoriteBeers.module.css';
import BeerList from '../BeerList/BeerList';
import AppContext from '../../contexts/AppContext';
import { UPDATE_FAVORITE_BEERS } from '../../constants/actionTypes';

const favoritePageState = {
  favoriteBeers: null,
};

const favoritePageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FAVORITE_BEERS:
      return ({ ...state, favoriteBeers: action.favoriteBeers });
    default:
      return 'Error!';
  }
};

function FavoriteBeers() {
  const [state, favoritePageDispatch] = useReducer(favoritePageReducer, favoritePageState);
  const { favoriteBeerIds, beerApi } = useContext(AppContext);

  const updateFavoriteBeers = useCallback((favoriteBeers) => {
    favoritePageDispatch({
      type: UPDATE_FAVORITE_BEERS,
      favoriteBeers,
    });
  }, []);

  useEffect(() => {
    beerApi
      .fetchBeersByIds(favoriteBeerIds)
      .then((res) => updateFavoriteBeers(res.map((r) => new Beer(r))));
  }, [beerApi, favoriteBeerIds, updateFavoriteBeers]);

  return (
    <FavoritePageContext.Provider value={{ ...state, favoritePageDispatch }}>
      <div className={styles.favoriteBeers}>
        <BeerList beers={state.favoriteBeers} />
      </div>
    </FavoritePageContext.Provider>
  );
}

export default FavoriteBeers;
