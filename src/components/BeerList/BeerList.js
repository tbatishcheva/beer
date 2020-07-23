import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerList.module.css';
import BeerItem from '../BeerItem/BeerItem';
import Beer from '../../models/Beer';

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.instanceOf(Beer)),
};

BeerList.defaultProps = {
  beers: null,
};

function BeerList({ beers }) {
  if (!beers) {
    return null;
  }

  return (
    <div className={styles.beerList}>
      {beers.map((b) => <BeerItem key={b.id} beer={b} />)}
    </div>
  );
}

export default BeerList;
