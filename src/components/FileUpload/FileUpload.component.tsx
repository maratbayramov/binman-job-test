import React, { FC } from 'react';

import IFileUpload from './FileUpload.interface';
import './FileUpload.style.scss';

const FileUpload: FC<IFileUpload> = (props: IFileUpload): JSX.Element => {
  return (
    <div className='file-upload'>
      <div className='file-upload__button'>{props.label}</div>
      <div className='file-upload__files'>{props.children}</div>
    </div>
  );
};

export default FileUpload;
