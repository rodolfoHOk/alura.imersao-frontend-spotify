import React from 'react';
import { SidebarNavigation } from './sidebar-navigation/sidebar-navigation';
import { LibraryHeader } from './library-header/library-header';
import { PlaylistCard } from './playlist-card/playlist-card';
import { LanguageButton } from './language-button/language-button';
import './sidebar.css';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return(
    <div className="sidebar">
      <SidebarNavigation />

      <div className="your-library">
        <div>
          <LibraryHeader />

          <section className="section-playlist">
            <PlaylistCard
              title='Crie sua primeira playlist'
              subtitle='É fácil, vamos te ajudar.'
              buttonLabel='Criar playlist'
            />

            <PlaylistCard
              title='Que tal criar um podcast novo?'
              subtitle='Avisaremos você sobre novos episódios.'
              buttonLabel='Explore podcasts'
            />
          </section>
        </div>

        <div className="cookies">
          <a href="">Cookies</a>
        </div>

        <div className="languages">
          <LanguageButton label='Português do Brasil' />
        </div>
      </div>
    </div>
  );
}
