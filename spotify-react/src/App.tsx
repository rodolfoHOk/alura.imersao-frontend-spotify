import React from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import './styles/reset.css';
import './styles/vars.css';
import './styles/global.css';
import './styles/main.css';
import './styles/media-queries.css';

interface AppProps {}

const App : React.FC<AppProps> = () => {
  return (
    <div className="main-layout">
      <div className="sidebar"></div>
      <main className="main-container">
        <Header />
      </main>
      <Footer />
    </div>
  );
}

export default App;
