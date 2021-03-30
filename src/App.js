import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import NavMenu from './components/NavMenu';
import Project from './components/Project';

const BodyStyle = styled.div`
  background-color: var(--dark-bg);
  color: var(--gray-1);
`;

export default function App() {
  return (
    <BodyStyle>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </BodyStyle>
  );
}
