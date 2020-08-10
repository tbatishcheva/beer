import React from 'react';
import PropTypes from 'prop-types';
import Beer from '../../../models/Beer';
import styles from './BeerDescription.module.css';

BeerDescription.propTypes = {
  beer: PropTypes.instanceOf(Beer).isRequired,
};

export default function BeerDescription({ beer }) {
  return (
    <div className={styles.beerDescription}>
      <div className={styles.descrTitle}>
        Description:
      </div>
      <div className={styles.description}>
        {beer.description}
      </div>
      <div className={styles.contributedWrapper}>
        <div className={styles.contributedTitle}>
          Contributed By:
        </div>
        <div className={styles.contributed}>
          {beer.contributed_by}
        </div>
      </div>
    </div>
  );
}
