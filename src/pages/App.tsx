import React from 'react';

import Header from '../components/Header/Header.component';
import Nav from '../components/Nav/Nav.component';
import NavItem from '../components/NavItem/NavItem.components';
import Clients from '../pages/Clients/Clients.page';
import { ReactComponent as MainLogo } from '../assets/svg/logo.svg';
import { ReactComponent as HomeLogo } from '../assets/svg/home.svg';
import { ReactComponent as ClientsLogo } from '../assets/svg/clients.svg';
import { ReactComponent as ReportsLogo } from '../assets/svg/reports.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header>
        <a className='header__logo' href='/'>
          <MainLogo />
        </a>
      </Header>
      <main>
        <Nav>
          <NavItem href='/'>
            <HomeLogo />
          </NavItem>
          <NavItem href='/' active>
            <ClientsLogo />
          </NavItem>
          <NavItem href='/'>
            <ReportsLogo />
          </NavItem>
        </Nav>
        <div className='page'>
          <Clients />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
