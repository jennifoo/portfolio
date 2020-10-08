import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';

import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';

function App() {
  return (
    <>
    <Router>
    <Nav />
    <Switch>
        <Route path="/projects">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
    </Switch>
    <Footer />
    </Router>
    
    
    </>
  );
}

export default App;

