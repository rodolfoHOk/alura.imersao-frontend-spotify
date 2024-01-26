import React from 'react';
import './styles/global.css';
import './styles/vars.css';
import { Header } from './components/header/header';

interface AppProps {}

const App : React.FC<AppProps> = () => {
  return (
    <Header />
  );
}

export default App;
