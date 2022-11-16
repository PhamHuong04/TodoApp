import React, { ReactNode } from 'react';
import styles from './Filter.module.scss';
interface Props {
  children: ReactNode
}
const Filter = (props: Props): JSX.Element => {
  const { children } = props;
  return <div className={styles.filter}>{children}</div>;
};

export default Filter;
