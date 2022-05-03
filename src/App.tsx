import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Opening } from './components/opening/Opening';
import { Lantern } from './components/lantern/Lantern';
import { AboutMe } from './components/aboutme/AboutMe';

function App() {
  return (
    <>
      <Lantern></Lantern>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
