import React, { FC } from 'react';

import IHeader from './Header.interface';
import './Header.style.scss';

const Header: FC<IHeader> = (props: IHeader): JSX.Element => {
  return <div className='header'>{props.children}</div>;
};

export default Header;
