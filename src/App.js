import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Scrollbar from 'react-smooth-scrollbar';
// import SmoothScrollbar from 'smooth-scrollbar';
// import styled from 'styled-components';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

import Scrollbar from 'react-smooth-scrollbar';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Smooth scrollbar

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        {/* <Scrollbar damping={0.1}> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
        {/* </Scrollbar> */}
      </Router>
    </>
  );
}
