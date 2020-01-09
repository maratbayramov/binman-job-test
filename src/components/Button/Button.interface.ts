import { MouseEvent } from 'react';

export default interface IButton {
  children?: (string | JSX.Element)[] | JSX.Element[] | JSX.Element | string;
  outline?: boolean;
  onlyIcon?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}
