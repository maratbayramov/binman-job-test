import * as React from 'react';

import Button from '../../components/Button/Button.component';
import SeekerTable from '../../containers/Table/SeekerTable.component';
import AddSeekerForm from '../../containers/AddSeekerForm/AddSeekerForm.component';
import { ReactComponent as PlusLogo } from '../../assets/svg/add.svg';
import { ReactComponent as FavoritesLogo } from '../../assets/svg/favorites.svg';
import './Clients.style.scss';

type State = {
  showAddSeekerForm: boolean;
};

const initialState: State = { showAddSeekerForm: false };

class Clients extends React.PureComponent {
  readonly state: State = initialState;

  private _toggleShowAddSeekerForm = (): void => {
    console.log('click');
    this.setState(
      (prevState: Readonly<State>): State => {
        return { showAddSeekerForm: !prevState.showAddSeekerForm };
      },
    );
  };

  render(): JSX.Element {
    return (
      <div className='page__clients'>
        <div className='clients-header'>
          <div className='clients-header__left'>
            <p>Ваши соискатели</p>
            <div>Всего соискателей: 67</div>
          </div>
          <div className='clients-header__right'>
            <Button outline>
              <FavoritesLogo />
              избранные
            </Button>
            <Button onClick={this._toggleShowAddSeekerForm}>
              <PlusLogo />
              добавить соискателя
            </Button>
          </div>
        </div>
        <div className='clients-page__table'>
          <SeekerTable />
        </div>
        <AddSeekerForm onCloseButtonClick={this._toggleShowAddSeekerForm} show={this.state.showAddSeekerForm} />
      </div>
    );
  }
}

export default Clients;
