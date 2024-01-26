import React from 'react';
import './library-header.css';

interface LibraryHeaderProps {}

export const LibraryHeader: React.FC<LibraryHeaderProps> = () => {
  function onClickDropDownButton() {
    const addPlaylistDropdown = document.getElementById('add_playlist_dropdown');
    if (addPlaylistDropdown != null) {
      addPlaylistDropdown.classList.toggle('show-dropdown-content');
    }
  }

  return (
    <div className="library__header">
      <a href="">
        <span className="fas fa-book library__icon"></span>
        <span>Sua Biblioteca</span>
      </a>
      <div className="dropdown">
        <button className="dropdown__button" onClick={onClickDropDownButton} >
          <span className="fas fa-plus"></span>
        </button>
        <div id="add_playlist_dropdown" className="dropdown__content">
          <ul>
            <li>
              <button>
                <span className="fas fa-th-list"></span>
                <span>Criar nova playlist</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
