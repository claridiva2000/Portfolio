import React from 'react';
import './App.css';
//components
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import About from './about/About'

function App() {
  return (
    <div className="App">
    <Hero/>
    <Projects/>
    <About/>


    </div>
  );
}

export default App;
