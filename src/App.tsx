import React from 'react';
import Home from './pages/home/Home';
import Designs from './pages/designs/Designs';
import Resume from './pages/resume/Resume';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <div className='bodyDiv'>
      <Home />
      <Designs />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;


