import React from 'react';
import PropTypes from 'prop-types';
import FoodPairingItem from '../FoodPairingItem/FoodPairingItem';
import styles from './FoodPairing.module.css';

FoodPairing.propTypes = {
  foodPairing: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function FoodPairing({ foodPairing }) {
  return (
    <div className={styles.foodPairing}>
      <div className={styles.foodPairingTitle}>
        Food Pairing:
      </div>
      {foodPairing.map((f) => <FoodPairingItem key={f}>{f}</FoodPairingItem>)}
    </div>
  );
}
