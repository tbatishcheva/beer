import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AppLink.module.css';

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

AppLink.defaultProps = {
  active: false,
};

export default function AppLink({ to, children, active }) {
  return (
    <Link className={`${styles.link} ${active ? styles.active : ''}`} to={to}>
      {children}
    </Link>
  );
}
