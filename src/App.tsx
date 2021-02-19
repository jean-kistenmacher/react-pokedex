import React from 'react';

import PokeDash from './pages/PokeDash';
import PokeList from './pages/PokeList';
import PokeInfo from './pages/PokeInfo';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <PokeDash />
    <PokeList />
    <PokeInfo />
    <GlobalStyle />
  </>
);

export default App;
