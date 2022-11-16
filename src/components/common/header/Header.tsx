import React from 'react';
import styles from './Header.module.scss';
const Header = (): JSX.Element => {
  return (
    <div className={styles.title}>
      Todos
    </div>
  );
};

export default Header;
