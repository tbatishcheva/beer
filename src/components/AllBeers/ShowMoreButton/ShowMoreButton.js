import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from './ShowMoreButton.module.css';

ShowMoreButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ShowMoreButton.defaultProps = {
  onClick: null,
  disabled: false,
};

export default function ShowMoreButton({ onClick, disabled }) {
  return (
    <Button className={styles.showMore} onClick={onClick} disabled={disabled}>
      Show More
    </Button>
  );
}
