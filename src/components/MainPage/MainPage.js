import React, { useReducer } from 'react';
import Filter from '../Filter/Filter';
import Beer from '../../models/Beer';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './MainPage.module.css';
import Header from '../App/Header/Header';
import AllBeers from '../AllBeers/AllBeers';
import {
  UPDATE_BEERS, TOGGLE_LOAD_ALL_DATA, REPLACE_BEERS, SET_FILTER_PARAMS,
} from '../../constants/actionTypes';

const mainPageState = {
  beers: [],
  isAllDataLoaded: false,
  filterParams: null,
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
    case REPLACE_BEERS:
      return { ...state, beers: action.beers.map((b) => new Beer(b)) };
    case TOGGLE_LOAD_ALL_DATA:
      return { ...state, isAllDataLoaded: action.isAllDataLoaded };
    case SET_FILTER_PARAMS:
      return { ...state, filterParams: { ...state.filterParams, ...action.filterParams } };
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
        <Filter />
        <AllBeers />
      </div>
    </MainPageContext.Provider>
  );
}
