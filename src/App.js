import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OpenSource from './components/OpenSource';
import Companies from './components/Companies';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OpenSource />
      <Companies />
    </div>
  );
}

export default App;
