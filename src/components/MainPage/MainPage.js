import React, { useReducer } from 'react';
import Beer from '../../models/Beer';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './MainPage.module.css';
import Header from '../App/Header/Header';
import AllBeers from '../AllBeers/AllBeers';
import { UPDATE_BEERS, LOAD_ALL_DATA } from '../../constants/actionTypes';

const mainPageState = {
  beers: [],
  isAllDataLoaded: false,
};

/**
 * @param {Object[]} beers
 * @return {Beer[]}
 */
const transformResult = (beers) => beers.map((b) => new Beer(b));

const mainPageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BEERS:
      return { ...state, beers: [...state.beers, ...transformResult(action.beers)] };
    case LOAD_ALL_DATA:
      return { ...state, isAllDataLoaded: true };
    default:
      return 'Error!!';
  }
};

export default function MainPage() {
  const [state, mainPageDispatch] = useReducer(mainPageReducer, mainPageState);

  return (
    <MainPageContext.Provider value={{ ...state, mainPageDispatch }}>
      <div className={styles.mainPage}>
        <Header />
        <AllBeers />
      </div>
    </MainPageContext.Provider>
  );
}
