import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

Input.propTypes = {
  helperText: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  helperText: '',
  onChange: null,
};

function Input({ helperText, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.helperText}>{helperText}</div>
      <input className={styles.input} onChange={onChange} />
    </div>
  );
}

export default Input;
