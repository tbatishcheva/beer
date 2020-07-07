import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BeerDetails.module.css';
import AppContext from '../../contexts/AppContext';

function BeerDetails() {
  const { beers } = useContext(AppContext);
  const { id } = useParams();
  const beer = useMemo(
    () => beers.find((b) => b.id === +id),
    [beers, id],
  );

  return (
    <div className={styles.beerDetails}>
      <div className={styles.image}>
        <img src={beer.imageUrl} alt={beer.name} />
      </div>
      <div className={styles.info}>
        {beer.name}
      </div>
      <div className={styles.description}>
        {beer.description}
      </div>
    </div>
  );
}

export default BeerDetails;
