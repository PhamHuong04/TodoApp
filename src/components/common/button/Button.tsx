import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
interface Props {
  children: ReactNode
  style?: React.CSSProperties
  handleClick?: () => void
}
const Button = (props: Props): JSX.Element => {
  const { children, handleClick } = props;
  return (
    <button
      className={`${styles.styleButton}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
