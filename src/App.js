import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import styled from 'styled-components';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Smooth scrollbar
SmoothScrollbar.use(OverscrollPlugin);

const ScrollStyle = styled.div`
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;

export default function App() {
  return (
    <ScrollStyle>
      <Router>
        <NavMenu />
        <Scrollbar damping={0.1}>
          <ScrollToTop />
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
          <Footer />
        </Scrollbar>
      </Router>
    </ScrollStyle>
  );
}
