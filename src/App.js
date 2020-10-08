import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';

function App() {
  return (
    <>
    <Nav />
      <Home1 />
      <Home2 />
      <Home3 />
    </>
  );
}

export default App;

