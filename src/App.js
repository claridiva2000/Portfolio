import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
//components
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import About from './about/About'
import Modal from './Modal/Modal'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <div className="App">
    <Hero/>
    <Projects/>
    <Switch>
    <Route exact path="/" component={Projects} />
    {/* <Route exact path="/" component={About} /> */}
    <Route component={NotFound} />
    </Switch>
    <About/>
    <Modal/>


    </div>
  );
}

export default App;
