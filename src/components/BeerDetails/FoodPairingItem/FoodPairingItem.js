import React from 'react';
import PropTypes from 'prop-types';
import styles from './FoodPairingItem.module.css';

FoodPairingItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default function FoodPairingItem({ children }) {
  return (
    <div className={styles.foodPairingItem}>{children}</div>
  );
}
