import React, { useCallback, useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { Footer } from './components/footer/footer';
import './styles/reset.css';
import './styles/vars.css';
import './styles/global.css';
import './styles/main.css';
import './styles/media-queries.css';
import { ArtistModel } from './models/artist-model';

interface AppProps {}

const App : React.FC<AppProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [artistsList, setArtistsList] = useState<ArtistModel[]>([]);

  function onSearchTermChange(text: string): void {
    setSearchTerm(text);
  }

  const fetchArtists = useCallback(async () => {
    let url;
    if (searchTerm.trim().length > 0) {
      if (searchTerm.trim() === "todos") {
        url = `http://localhost:3333/artists`;
      } else {
        url = `http://localhost:3333/artists?name=${searchTerm}`;
      }
      const response = await fetch(url);
      const json = await response.json();
      setArtistsList(json);
    } else {
      setArtistsList([]);
    }
    }, [searchTerm]);

  useEffect(() => {
    fetchArtists();
  }, [searchTerm]);

  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-container">
        <Header searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
        <Content artistsList={artistsList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
