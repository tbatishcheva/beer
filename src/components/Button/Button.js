import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const DEFAULT_COLOR = 'default';
export const HIGHLIGHTED_COLOR = 'highlighted';

const COLORS_MAP = {
  [DEFAULT_COLOR]: styles.default,
  [HIGHLIGHTED_COLOR]: styles.highlighted,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Object.keys(COLORS_MAP)),
};

Button.defaultProps = {
  className: '',
  onClick: null,
  color: DEFAULT_COLOR,
};

function Button({
  children, className, onClick, color, ...rest
}) {
  const buttonClassName = `
    ${styles.button} 
    ${className}
    ${COLORS_MAP[color]}
  `;

  return (
    <button
      type="button"
      className={
        buttonClassName
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
