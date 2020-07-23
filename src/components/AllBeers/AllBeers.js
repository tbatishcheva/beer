import React, { useCallback, useContext, useEffect } from 'react';
import { UPDATE_BEERS } from '../constants/actionTypes';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './AllBeers.module.css';
import BeerList from '../BeerList/BeerList';
import AppContext from '../../contexts/AppContext';

function AllBeers() {
  const { beers, mainPageDispatch } = useContext(MainPageContext);
  const { beerApi } = useContext(AppContext);

  const updateBeers = useCallback((beers) => {
    mainPageDispatch({
      type: UPDATE_BEERS,
      beers,
    });
  }, []);

  useEffect(() => {
    beerApi.fetchAllBeer().then((res) => updateBeers(res));
  }, [beerApi, beers]);

  return (
    <div className={styles.allBeers}>
      <BeerList beers={beers} />
    </div>
  );
}

export default AllBeers;
