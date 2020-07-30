import React, { useCallback, useContext, useEffect } from 'react';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import { UPDATE_BEERS, INCREASE_PAGE_COUNT, LOAD_ALL_DATA } from '../../constants/actionTypes';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './AllBeers.module.css';
import BeerList from '../BeerList/BeerList';
import AppContext from '../../contexts/AppContext';

function AllBeers() {
  const { beers, isAllDataLoaded, mainPageDispatch } = useContext(MainPageContext);
  const { beerApi, pageNumber, dispatch } = useContext(AppContext);

  const updateBeers = useCallback((beersRes) => {
    if (!beersRes || beersRes.length === 0) {
      mainPageDispatch({
        type: LOAD_ALL_DATA,
      });

      return;
    }

    mainPageDispatch({
      type: UPDATE_BEERS,
      beers: beersRes,
    });
  }, [mainPageDispatch]);

  const fetchBeers = useCallback(() => {
    beerApi.fetchAllBeer(pageNumber).then((res) => updateBeers(res));
  }, [beerApi, pageNumber, updateBeers]);

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
  }, [dispatch, fetchBeers, isAllDataLoaded]);

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
