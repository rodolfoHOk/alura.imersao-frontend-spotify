import React from 'react';
import smallLeftIcon from '../../assets/icons/small-left.png';
import smallRightIcon from '../../assets/icons/small-right.png';
import searchIcon from '../../assets/icons/search.png';
import './header.css';

interface HeaderProps {
  searchTerm: string;
  onSearchTermChange: (text: string) => void;
}

export const Header: React.FC<HeaderProps> = ({searchTerm, onSearchTermChange}) => {
  return(
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeftIcon} alt="Seta esquerda" />
        </button>

        <button className="arrow-right">
          <img src={smallRightIcon} alt="Seta direita" />
        </button>
      </div>

      <div className="header__search">
        <img src={searchIcon} alt="" />
        <input id="search-input" type="text" maxLength={800} 
          placeholder="O que você quer ouvir?" 
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.currentTarget.value)}
        />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscrever-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
}
