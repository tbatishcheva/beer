import React, { useCallback, useContext, useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import MainPageContext from '../../contexts/MainPageContext';
import {
  SET_FILTER_PARAMS,
  TOGGLE_LOAD_ALL_DATA,
  RESET_PAGE_NUMBER,
} from '../../constants/actionTypes';
import Input from '../Input/Input';
import AppContext from '../../contexts/AppContext';
import styles from './Filter.module.css';

export default function Filter() {
  const { mainPageDispatch } = useContext(MainPageContext);
  const { dispatch } = useContext(AppContext);
  const [food, setFood] = useQueryParam('food', StringParam);
  const [hops, setHops] = useQueryParam('hops', StringParam);

  const updateFilters = useCallback((filterParams) => {
    mainPageDispatch({
      type: SET_FILTER_PARAMS,
      filterParams,
    });

    mainPageDispatch({
      type: TOGGLE_LOAD_ALL_DATA,
      isAllDataLoaded: false,
    });

    dispatch({
      type: RESET_PAGE_NUMBER,
    });
  }, [mainPageDispatch, dispatch]);

  const handleFoodChange = useCallback((e) => {
    const { value } = e.target;
    const filterParams = {
      food: value,
    };
    setFood(value);

    updateFilters(filterParams);
  }, [updateFilters, setFood]);

  const handleHopsChange = useCallback((e) => {
    const { value } = e.target;
    const filterParams = {
      hops: value,
    };
    setHops(value);

    updateFilters(filterParams);
  }, [updateFilters, setHops]);

  useEffect(() => {
    if (!food && !hops) {
      return;
    }

    const filterParams = {
      food,
      hops,
    };

    updateFilters(filterParams);
  }, [updateFilters, food, hops]);

  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        Filters:
      </div>
      <Input value={food} className={styles.input} helperText="Food" onChange={handleFoodChange} />
      <Input value={hops} className={styles.input} helperText="Hops" onChange={handleHopsChange} />
    </div>
  );
}
