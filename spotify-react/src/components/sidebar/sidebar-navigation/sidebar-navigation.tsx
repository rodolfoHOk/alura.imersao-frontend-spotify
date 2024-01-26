import React from 'react';
import logo from '../../../assets/icons/logo-spotify.png';
import './sidebar-navigation.css';

interface SidebarNavigationProps {}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = () => {
  return (
    <nav className="sidebar__navigation">
      <div className="logo">
        <a href="">
          <img src={logo} alt="logo do Spotify" />
        </a>
      </div>

      <ul>
        <li>
          <a href="">
            <span className="fas fa-home navigation__icon"></span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="">
            <span className="fas fa-search navigation__icon"></span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
