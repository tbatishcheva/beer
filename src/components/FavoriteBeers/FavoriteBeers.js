import React, { useContext, useMemo } from 'react';
import styles from './FavoriteBeers.module.css';
import AppContext from '../../contexts/AppContext';
import BeerList from '../BeerList/BeerList';

const filterBeer = (beers, favoriteBeers) => beers.filter((b) => favoriteBeers.includes(b.id));

function FavoriteBeers() {
  const { beers, favoriteBeers } = useContext(AppContext);
  const beerList = useMemo(
    () => (filterBeer(beers, favoriteBeers)),
    [beers, favoriteBeers],
  );

  return (
    <div className={styles.favoriteBeers}>
      <BeerList beers={beerList} />
    </div>
  );
}

export default FavoriteBeers;
