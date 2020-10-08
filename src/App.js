import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NoMatch
} from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Nav />
    <Switch>
        <Route exact path="/portfolio/projects">
          <Portfolio />
        </Route>
        <Route exact path="/portfolio/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Home />
        </Route>
    </Switch>
    </Router>
    
    
    </>
  );
}

export default App;

