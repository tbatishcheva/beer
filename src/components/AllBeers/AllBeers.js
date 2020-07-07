import React, { useContext } from 'react';
import styles from './AllBeers.module.css';
import BeerList from '../BeerList/BeerList';
import AppContext from '../../contexts/AppContext';

function AllBeers() {
  const { beers } = useContext(AppContext);

  return (
    <div className={styles.allBeers}>
      <BeerList beers={beers} />
    </div>
  );
}

export default AllBeers;
