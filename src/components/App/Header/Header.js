import React from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../../AppLink/AppLink';
import styles from './Header.module.css';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <AppLink to="/" active={location.pathname === '/'}>
            Home
          </AppLink>
        </li>
        <li className={styles.listItem}>
          <AppLink to="/favorites" active={location.pathname === '/favorites'}>
            Favorites
          </AppLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
