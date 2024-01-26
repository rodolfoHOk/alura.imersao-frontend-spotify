import React from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import './styles/reset.css';
import './styles/vars.css';
import './styles/global.css';
import './styles/main.css';
import './styles/media-queries.css';
import { Sidebar } from './components/sidebar/sidebar';

interface AppProps {}

const App : React.FC<AppProps> = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-container">
        <Header />
      </main>
      <Footer />
    </div>
  );
}

export default App;
