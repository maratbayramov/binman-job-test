import React, { FC } from 'react';
import classNames from 'classnames';

import ISeekerPhone from './SeekerPhone.interface';
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone.svg';
import './SeekerPhone.style.scss';

const SeekerPhone: FC<ISeekerPhone> = (props: ISeekerPhone) => {
  const renderPhoneNumber = (noNumber?: string, number?: string, more?: string): JSX.Element => {
    if (noNumber) {
      return <div className='seeker-phone__no-phone'>{noNumber}</div>;
    } else {
      return (
        <React.Fragment>
          <div className='seeker-phone__number'>{number}</div>
          {props.more && <div className='seeker-phone__more'>{more}</div>}
        </React.Fragment>
      );
    }
  };

  const classes: string = classNames('seeker-phone', {
    'seeker-phone--no-phone': props.noNumber,
  });

  return (
    <div className={classes}>
      <div className='seeker-phone__image'>
        <PhoneIcon />
      </div>
      <div className='seeker-phone__info'>{renderPhoneNumber(props.noNumber, props.number, props.more)}</div>
    </div>
  );
};

export default SeekerPhone;
