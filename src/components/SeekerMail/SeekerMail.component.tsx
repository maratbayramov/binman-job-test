import React, { FC } from 'react';
import classNames from 'classnames';

import ISeekerMail from './SeekerMail.interface';
import { ReactComponent as MailIcon } from '../../assets/svg/mail.svg';
import './SeekerMail.style.scss';

const SeekerMail: FC<ISeekerMail> = (props: ISeekerMail) => {
  const renderMail = (noEmail?: string, addr?: string, more?: string): JSX.Element => {
    if (noEmail) {
      return <div className='seeker-mail__no-email'>{noEmail}</div>;
    } else {
      return (
        <React.Fragment>
          <div className='seeker-mail__addr'>{addr}</div>
          <div className='seeker-mail__more'>{more}</div>
        </React.Fragment>
      );
    }
  };

  const classes: string = classNames('seeker-mail', {
    'seeker-mail--no-email': props.noEmail,
  });

  return (
    <div className={classes}>
      <div className='seeker-mail__image'>
        <MailIcon />
      </div>
      <div className='seeker-mail__info'>{renderMail(props.noEmail, props.addr, props.more)}</div>
    </div>
  );
};

export default SeekerMail;
