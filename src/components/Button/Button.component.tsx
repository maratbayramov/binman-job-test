import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';

import IButtom from './Button.interface';
import './Button.style.scss';

const Button: FC<IButtom> = (props: IButtom): JSX.Element => {
  const classes: string = classNames('button', {
    'button--outline': props.outline,
    'button--only-icon': props.onlyIcon,
  });

  const _handleClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    props.onClick && props.onClick(evt);
  };

  return (
    <button className={classes} onClick={_handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
