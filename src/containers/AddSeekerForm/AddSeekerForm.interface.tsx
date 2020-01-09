import { MouseEvent } from 'react';

export default interface IAddSeekerFrom {
  onCloseButtonClick?(event: MouseEvent<HTMLButtonElement>): void;
  show?: boolean;
}
