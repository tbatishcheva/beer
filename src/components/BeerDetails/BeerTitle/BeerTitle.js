import React from 'react';
import PropTypes from 'prop-types';
import Beer from '../../../models/Beer';
import styles from './BeerTitle.module.css';

BeerTitle.propTypes = {
  beer: PropTypes.instanceOf(Beer).isRequired,
};

export default function BeerTitle({ beer }) {
  return (
    <div className={styles.beerTitle}>
      <div className={styles.name}>{beer.name}</div>
      <div className={styles.tagline}>{`Tagline: ${beer.tagline}`}</div>
      <div className={styles.firstBrewed}>{`First Brewed: ${beer.first_brewed}`}</div>
    </div>
  );
}
