import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Opening } from './components/opening/Opening';
import { Lantern } from './components/lantern/Lantern';
import { AboutMe } from './components/aboutme/AboutMe';
import { FeaturedProjects } from './components/featuredprojects/FeaturedProjects';
import { OtherProjects } from './components/otherprojects/OtherProjects';
import { ContactMe } from './components/contactme/ContactMe';

function App() {
  return (
    <>
      <Lantern></Lantern>
      <AboutMe></AboutMe>
      <FeaturedProjects></FeaturedProjects>
      <OtherProjects/>
      <ContactMe/>
    </>
  );
}

export default App;
