import React from 'react';
import styles from './MainPage.module.css';
import Header from '../App/Header/Header';
import AllBeers from '../AllBeers/AllBeers';

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <AllBeers />
    </div>
  );
}

export default MainPage;
