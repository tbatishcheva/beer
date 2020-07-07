import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BeerItem.module.css';
import Beer from '../../models/Beer';
import Button,
{ DEFAULT_COLOR, HIGHLIGHTED_COLOR } from '../Button/Button';
import AppContext from '../../contexts/AppContext';
import { TOGGLE_FAVORITES } from '../constants/actionTypes';

BeerItem.propTypes = {
  beer: PropTypes.instanceOf(Beer).isRequired,
};

function BeerItem({ beer }) {
  const { dispatch, favoriteBeers } = useContext(AppContext);
  const handleLikeClick = useCallback(
    () => {
      dispatch({
        type: TOGGLE_FAVORITES,
        beer,
      });
    },
    [beer, dispatch],
  );
  const isActive = useMemo(
    () => favoriteBeers.includes(beer.id),
    [beer, favoriteBeers],
  );

  return (
    <div className={styles.beerItem}>
      <div className={styles.image}>
        <img
          src={beer.imageUrl}
          alt={beer.name}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          {beer.name}
        </div>
        <div className={styles.description}>
          {beer.description}
        </div>
        <div className={styles.controls}>
          <Link to={`/beer/${beer.id}`}>
            Read More
          </Link>
          <Button
            onClick={handleLikeClick}
            color={isActive ? HIGHLIGHTED_COLOR : DEFAULT_COLOR}
          >
            Like
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BeerItem;
