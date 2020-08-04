import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

Input.propTypes = {
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  helperText: '',
  onChange: null,
  className: '',
  value: '',
};

function Input({
  helperText, onChange, className, value,
}) {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <div className={styles.helperText}>{helperText}</div>
      <input className={styles.input} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
