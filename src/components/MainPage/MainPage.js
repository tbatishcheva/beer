import React, { useReducer } from 'react';
import Beer from '../../models/Beer';
import MainPageContext from '../../contexts/MainPageContext';
import styles from './MainPage.module.css';
import Header from '../App/Header/Header';
import AllBeers from '../AllBeers/AllBeers';
import { UPDATE_BEERS } from '../../constants/actionTypes';

const mainPageState = {
  beers: null,
};

const mainPageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BEERS:
      return { ...state, beers: action.beers.map((b) => new Beer(b)) };
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
