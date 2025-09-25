import { Navbar } from './components/Navbar';

import './App.scss';
import { Outlet } from 'react-router-dom';

document.documentElement.classList.add('has-navbar-fixed-top');

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
