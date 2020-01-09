import React from 'react';

import SeekerBio from '../../components/SeekerBio/SeekerBio.component';
import SeekerPhone from '../../components/SeekerPhone/SeekerPhone.component';
import SeekerMail from '../../components/SeekerMail/SeekerMail.component';
import Rating from '../../components/Rating/Rating.component';
import Button from '../../components/Button/Button.component';
import { ReactComponent as ResumeIcon } from '../../assets/svg/resume.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/svg/archive.svg';
import { ReactComponent as FavoritesIcon } from '../../assets/svg/favorites.svg';
import './SeekerTable.style.scss';

const SeekerTable = (): JSX.Element => {
  return (
    <table className='seeker-table'>
      <thead>
        <tr>
          <th>соискатель</th>
          <th>телефон</th>
          <th>e-mail</th>
          <th>оценка соискателя</th>
          <th></th>
        </tr>
      </thead>
      <tfoot className='seeker-table__show-more'>
        <tr>
          <td colSpan={5}>
            <a href='/'>Показать еще</a>
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>
            <SeekerBio name='Бинман Иван Натанови' vacancy='Вакансия: Full-stack разработчик' img='/assets/img/1.png' />
          </td>
          <td>
            <SeekerPhone number='+7 (900) 800-70-60' more='Показать еще 1 номер' />
          </td>
          <td>
            <SeekerMail addr='ioan@binman.ru' more='Показать еще 1 e-mail' />
          </td>
          <td>
            <Rating value={4} starsCount={5} caption='Средний балл: ' />
          </td>
          <td>
            <Button outline onlyIcon>
              <ResumeIcon />
            </Button>
            <Button outline onlyIcon>
              <ArchiveIcon />
            </Button>
            <Button outline onlyIcon>
              <FavoritesIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <SeekerBio
              name='Дурков Павел Валерьевич'
              vacancy='Вакансия: Full-stack разработчик'
              img='/assets/img/4.png'
            />
          </td>
          <td>
            <SeekerPhone noNumber='Телефон не указан' />
          </td>
          <td>
            <SeekerMail addr='durkov@vkontakte.ru' />
          </td>
          <td>
            <Rating value={1} starsCount={5} caption='Средний балл: ' />
          </td>
          <td>
            <Button outline onlyIcon>
              <ResumeIcon />
            </Button>
            <Button outline onlyIcon>
              <ArchiveIcon />
            </Button>
            <Button outline onlyIcon>
              <FavoritesIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <SeekerBio name='Лебедин Артеймий Андреевич' vacancy='Вакансия: Full-stack' img='/assets/img/2.png' />
          </td>
          <td>
            <SeekerPhone number='+7 (800) 555-35-35' />
          </td>
          <td>
            <SeekerMail addr='design@lebedin.ru' />
          </td>
          <td>
            <Rating value={3} starsCount={5} caption='Средний балл: ' />
          </td>
          <td>
            <Button outline onlyIcon>
              <ResumeIcon />
            </Button>
            <Button outline onlyIcon>
              <ArchiveIcon />
            </Button>
            <Button outline onlyIcon>
              <FavoritesIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <SeekerBio name='Чулков Олег' vacancy='Вакансия: Web-дизайнер' img='/assets/img/5.png' />
          </td>
          <td>
            <SeekerPhone noNumber='Телефон не указан' />
          </td>
          <td>
            <SeekerMail noEmail='E-mail не указан' />
          </td>
          <td>
            <Rating value={2} starsCount={5} caption='Средний балл: ' />
          </td>
          <td>
            <Button outline onlyIcon>
              <ResumeIcon />
            </Button>
            <Button outline onlyIcon>
              <ArchiveIcon />
            </Button>
            <Button outline onlyIcon>
              <FavoritesIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <SeekerBio
              name='Федора Линукс Линусович'
              vacancy='Вакансия: Front-end разрабочик'
              img='/assets/img/3.png'
            />
          </td>
          <td>
            <SeekerPhone number='+7 (800) 200-06-60' more='Показать еще 1 номер' />
          </td>
          <td>
            <SeekerMail addr='ioan@binman.ru' more='Показать еще 1 e-mail' />
          </td>
          <td>
            <Rating value={5} starsCount={5} caption='Средний балл: ' />
          </td>
          <td>
            <Button outline onlyIcon>
              <ResumeIcon />
            </Button>
            <Button outline onlyIcon>
              <ArchiveIcon />
            </Button>
            <Button outline onlyIcon>
              <FavoritesIcon />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SeekerTable;
