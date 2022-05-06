import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Opening } from './components/opening/Opening';
import { Lantern } from './components/lantern/Lantern';
import { AboutMe } from './components/aboutme/AboutMe';
import { FeaturedProjects } from './components/featuredprojects/FeaturedProjects';
import { OtherProjects } from './components/otherprojects/OtherProjects';
import { ContactMe } from './components/contactme/ContactMe';
import { SideBar } from './components/sidebar/SideBar';
import { LoadingPage } from './components/loadingpage/LoadingPage';
import { ScrollBox } from './components/scrollbox/ScrollBox';
import { Navbar } from './components/navbar/Navbar';

function App() {
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000)
  }, [])

  return (
    <>
      {/* <LoadingPage/> */}
      {loading ?
        <LoadingPage /> :

        <div>
          <Navbar/>
          <div id="home">
          <Lantern></Lantern>
          </div>
          <ScrollBox id="about">
            <AboutMe />
          </ScrollBox>
       
          <ScrollBox id="featured">
            <FeaturedProjects />
          </ScrollBox>

          <ScrollBox id="other">
            <OtherProjects />
          </ScrollBox>

          <ScrollBox id="contact">
            <ContactMe />
          </ScrollBox>

          <SideBar></SideBar>
        </div>
      }
    </>
  );
}

export default App;
