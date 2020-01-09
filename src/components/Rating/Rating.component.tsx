import React, { FC } from 'react';
import { times } from 'lodash';

import { ReactComponent as StarFilled } from '../../assets/svg/star_fill.svg';
import { ReactComponent as StarOutlined } from '../../assets/svg/star_outline.svg';
import IRating from './Rating.interface';
import './Rating.style.scss';

const Rating: FC<IRating> = (props: IRating): JSX.Element => {
  const filledStarsWidth = (props.value / props.starsCount) * 100;

  const renderStarts = (starsCount: number, filledStarsWidth: number): JSX.Element => {
    return (
      <React.Fragment>
        <div className='rating__stars-filled' style={{ width: filledStarsWidth + '%' }}>
          {times(starsCount, (i) => {
            return <StarFilled key={i} />;
          })}
        </div>
        <div className='rating__stars-outlined'>
          {times(starsCount, (i) => {
            return <StarOutlined key={i} />;
          })}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className='rating'>
      <div className='rating__stars'>{renderStarts(props.starsCount, filledStarsWidth)}</div>
      {props.caption && (
        <div className='rating__caption'>
          {props.caption}
          <span>{props.value.toFixed(1)}</span>
        </div>
      )}
    </div>
  );
};

export default Rating;
