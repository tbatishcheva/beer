import React, { useCallback, useContext } from 'react';
import MainPageContext from '../../contexts/MainPageContext';
import { LOAD_ALL_DATA, REPLACE_BEERS } from '../../constants/actionTypes';
import styles from './Filter.module.css';
import Input from '../Input/Input';
import AppContext from '../../contexts/AppContext';

export default function Filter() {
  const { beerApi } = useContext(AppContext);
  const { mainPageDispatch } = useContext(MainPageContext);

  const updateBeers = useCallback((beersRes) => {
    mainPageDispatch({
      type: LOAD_ALL_DATA,
    });

    mainPageDispatch({
      type: REPLACE_BEERS,
      beers: beersRes,
    });
  }, [mainPageDispatch]);

  const handleFoodChange = useCallback((e) => {
    const { value } = e.target;
    beerApi.fetchBeerByFood(value).then((res) => updateBeers(res));
  }, []);

  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        Filters:
      </div>
      <Input helperText="Food" onChange={handleFoodChange} />
    </div>
  );
}
