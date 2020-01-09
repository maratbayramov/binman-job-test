import React, { FC } from 'react';

import ITextField from './TextField.interface';
import './TextField.style.scss';

const TextField: FC<ITextField> = (props: ITextField): JSX.Element => {
  return <input className='text-field' placeholder={props.placeholder} name={props.name} />;
};

export default TextField;
