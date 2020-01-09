import React, { FC } from 'react';
import classNames from 'classnames';

import INavItem from './NavItem.interface';
import './NavItem.style.scss';

const NavItem: FC<INavItem> = (props: INavItem): JSX.Element => {
  const classes: string = classNames('nav-item', {
    'nav-item--active': props.active,
  });

  return (
    <li className={classes}>
      <a href={props.href}>{props.children}</a>
    </li>
  );
};

export default NavItem;
