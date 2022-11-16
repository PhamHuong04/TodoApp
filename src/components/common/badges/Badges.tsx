import React, { ReactNode } from 'react';

interface Props {
  title: string
  children: ReactNode
}
const Badges = (props: Props): JSX.Element => {
  const { title, children } = props;
  return (
    <li >
      {title}
      <span >{children}</span>
    </li>
  );
};

export default Badges;
