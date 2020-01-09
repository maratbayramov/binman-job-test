import React, { FC } from 'react';

import ISeekerBio from './SeekerBio.interface';
import './SeekerBio.style.scss';

const SeekerBio: FC<ISeekerBio> = (props: ISeekerBio) => {
  return (
    <div className='seeker-bio'>
      <div className='seeker-bio__image'>
        <img src={props.img} alt='' />
      </div>
      <div className='seeker-bio__info'>
        <div className='seeker-bio__name'>{props.name}</div>
        <div className='seeker-bio__vacancy'>{props.vacancy}</div>
      </div>
    </div>
  );
};

export default SeekerBio;
