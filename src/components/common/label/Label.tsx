import React, { ReactNode } from 'react';
import { FontWeight } from '../../lib/enum';
import styles from './Label.module.scss';
interface Props {
  children: ReactNode
  fontWeight?: FontWeight
  name: string
}
const Label = (props: Props): JSX.Element => {
  const { children, fontWeight = FontWeight.Bold, name } = props;
  return (
    <label htmlFor={name} className={`${styles[fontWeight]}`}>
      {children}
    </label>
  );
};

export default Label;
