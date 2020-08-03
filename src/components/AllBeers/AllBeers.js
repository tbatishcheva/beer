import React, { useCallback, useContext, useEffect } from 'react';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import {
  UPDATE_BEERS, INCREASE_PAGE_COUNT, TOGGLE_LOAD_ALL_DATA, REPLACE_BEERS,
} from '../../constants/actionTypes';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './AllBeers.module.css';
import BeerList from '../BeerList/BeerList';
import AppContext from '../../contexts/AppContext';

function AllBeers() {
  const {
    beers, isAllDataLoaded, mainPageDispatch, filterParams,
  } = useContext(MainPageContext);
  const { beerApi, pageNumber, dispatch } = useContext(AppContext);

  const updateBeers = useCallback((beersRes) => {
    if (!beersRes || beersRes.length === 0) {
      mainPageDispatch({
        type: TOGGLE_LOAD_ALL_DATA,
        isAllDataLoaded: true,
      });

      return;
    }

    if (pageNumber === 1) {
      mainPageDispatch({
        type: REPLACE_BEERS,
        beers: beersRes,
      });

      return;
    }

    mainPageDispatch({
      type: UPDATE_BEERS,
      beers: beersRes,
    });
  }, [mainPageDispatch, pageNumber]);

  const fetchBeers = useCallback(() => {
    beerApi.fetchBeerByParam(filterParams, pageNumber).then((res) => updateBeers(res));
  }, [beerApi, pageNumber, updateBeers, filterParams]);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  const handleShowMoreClick = useCallback(() => {
    if (isAllDataLoaded) {
      return;
    }

    dispatch({
      type: INCREASE_PAGE_COUNT,
    });
  }, [dispatch, isAllDataLoaded]);

  return (
    <div className={styles.allBeers}>
      <BeerList beers={beers} />
      <div className={styles.showMore}>
        <ShowMoreButton onClick={handleShowMoreClick} disabled={isAllDataLoaded} />
      </div>
    </div>
  );
}

export default AllBeers;
