import React, { FC } from 'react';

import INav from './Nav.interface';
import './Nav.style.scss';

const Nav: FC<INav> = (props: INav): JSX.Element => {
  return (
    <nav className='nav'>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default Nav;
