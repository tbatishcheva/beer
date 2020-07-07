import React from 'react';
import styles from './FavoritePage.module.css';
import Header from '../App/Header/Header';
import FavoriteBeers from '../FavoriteBeers/FavoriteBeers';

function FavoritePage() {
  return (
    <div className={styles.favoritePage}>
      <Header />
      <FavoriteBeers />
    </div>
  );
}

export default FavoritePage;
