import React from 'react';
import PropTypes from 'prop-types';
import Property from '../../../models/Property';
import styles from './PropertyItem.module.css';

PropertyItem.propTypes = {
  property: PropTypes.instanceOf(Property).isRequired,
};

export default function PropertyItem({ property }) {
  return (
    <div className={styles.propertyItem}>
      <div className={styles.name}>
        {property.name}
      </div>
      <div className={styles.value}>
        {property.value}
      </div>
    </div>
  );
}
