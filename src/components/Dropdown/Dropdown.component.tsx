import React, { FC } from 'react';

import IDropdown from './Dropdown.interface';
import { ReactComponent as SelectArrow } from '../../assets/svg/select-arrow.svg';
import './Dropdown.style.scss';

const Dropdown: FC<IDropdown> = (props: IDropdown): JSX.Element => {
  return (
    <div className='dropdown'>
      <select placeholder={props.placeholder}>
        <option disabled selected>
          {props.placeholder}
        </option>
      </select>
      <SelectArrow />
    </div>
  );
};

export default Dropdown;
