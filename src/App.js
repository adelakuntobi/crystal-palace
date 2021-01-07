import React from 'react';
import './App.scss';
import GlobalStyle from './GlobalStyle';
import Definetely from './sections/Definetely';
import Header from './sections/Header';
import Main from './sections/Main';
import Showcase from './sections/Showcase';
import Sponsor from './sections/Sponsor';
import Reviews from './sections/Reviews';
import Subscribe from './sections/Subscribe';

function App() {
  return (
    <div className="App ">
      <GlobalStyle />
      <Header />
      <Main />
      <Definetely />
      <Showcase />
      <Reviews />
      <Sponsor />
      <Subscribe />
    </div>
  );
}

export default App;
