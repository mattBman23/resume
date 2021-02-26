import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PortfolioComp } from './pages/portfolio/Portfolio';
import { ProfileComp } from './components/Profile/Profile';
import { FooterComp } from './components/Footer.js/Footer';
import HeaderComp from './components/Header/Header';
import { ResumeComp } from './pages/resume/Resume';

import './App.css';

function App() {
  return (
    <Container className="app_container">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <ProfileComp />
        </Grid>
        <Grid item xs>
          <Router>
            <HeaderComp />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <PortfolioComp />
                </Route>
                <Route path="/">
                  <ResumeComp />
                </Route>
              </Switch>
            </div>
          </Router>
          <FooterComp />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
