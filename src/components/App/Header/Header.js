import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <header className={styles.mainHeader}>
        <Link className={styles.link} to="/">
          Beers
        </Link>
      </header>
      <Link className={styles.favoritesLink} to="/favorites">
        Favorites
      </Link>
    </div>
  );
}

export default Header;
