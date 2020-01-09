import React, { FC } from 'react';
import classNames from 'classnames';

import TextField from '../../components/TextField/TextField.component';
import Dropdown from '../../components/Dropdown/Dropdown.component';
import FileUpload from '../../components/FileUpload/FileUpload.component';
import Rating from '../../components/Rating/Rating.component';
import Button from '../../components/Button/Button.component';
import IAddSeekerFrom from './AddSeekerForm.interface';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import './AddSeekerForm.style.scss';

const AddSeekerForm: FC<IAddSeekerFrom> = (props: IAddSeekerFrom): JSX.Element => {
  const classes: string = classNames('add-seeker-form', {
    'add-seeker-form--show': props.show,
  });

  return (
    <div className={classes}>
      <div className='add-seeker-form__wrapper'>
        <div className='add-seeker-form__close-button'>
          <Button onlyIcon onClick={props.onCloseButtonClick}>
            <CloseIcon />
          </Button>
        </div>
        <div className='add-seeker-form__title'>Добавление соискателя</div>
        <hr />
        <div className='add-seeker-form__block'>
          <p>Основные данные</p>
          <label htmlFor='fio'>
            ФИО
            <TextField name='fio' placeholder='Введите ФИО' />
          </label>
          <label htmlFor='vacancy'>
            Вакансия
            <Dropdown name='vacancy' placeholder='Выберите вакансию' />
          </label>
          <label htmlFor='vacancy'>
            Фотография
            <div className='add-seeker-form__caption'>
              Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png
            </div>
            <FileUpload name='vacancy' label='Выберите файл'>
              Файл не выбран
            </FileUpload>
          </label>
        </div>
        <hr />
        <div className='add-seeker-form__title'>Контактные данные</div>
        <div className='add-seeker-form__block'>
          <label htmlFor='phone-number'>
            Номер телефона
            <TextField name='phone-number' placeholder='Введите номер телефона' />
            <a href='#' className='add-seeker-form__add-more'>
              Добавить еще один номер телефона
            </a>
          </label>
          <label htmlFor='email'>
            E-mail
            <Dropdown name='email' placeholder='Выберите email' />
            <a href='#' className='add-seeker-form__add-more'>
              Добавить еще один e-mail
            </a>
          </label>
        </div>
        <hr />
        <div className='add-seeker-form__title'>Резюме и результаты тестового задания</div>
        <div className='add-seeker-form__block'>
          <label htmlFor='cv'>
            Резюме
            <div className='add-seeker-form__caption'>
              Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc
            </div>
            <FileUpload name='cv' label='Выберите файл'>
              Файл не выбран
            </FileUpload>
          </label>
          <label htmlFor='cv'>
            Архив с результатами тестового задания
            <div className='add-seeker-form__caption'>
              Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar
            </div>
            <FileUpload name='cv' label='Выберите файл'>
              Файл не выбран
            </FileUpload>
          </label>
        </div>
        <hr />
        <div className='add-seeker-form__title'>Оценка соискателя</div>
        <div className='add-seeker-form__ratings'>
          <div>
            Оценка резюме
            <Rating value={5} starsCount={5} />
          </div>
          <div>
            Оценка тестового задания
            <Rating value={1} starsCount={5} />
          </div>
          <div>
            Оценка собеседования
            <Rating value={1} starsCount={5} />
          </div>
        </div>
        <hr />
        <div className='add-seeker-form__buttons'>
          <Button outline>Отменить</Button>
          <Button>Добавить соискателя</Button>
        </div>
      </div>
    </div>
  );
};

export default AddSeekerForm;
