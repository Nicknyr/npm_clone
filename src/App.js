import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Hero from './components/Hero';
import About from './components/About';
import OpenSource from './components/OpenSource';
import Companies from './components/Companies';
import Footer from './components/Footer';
import RandomWords from './components/RandomWords';

function App() {
  return (
    <div>
      <Navbar />
      <RandomWords />
      <Searchbar />
      <Hero />
      <About />
      <OpenSource />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
