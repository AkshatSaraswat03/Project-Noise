import React from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LearnPage from './pages/LearnPage';
import GalleryPage from './pages/GalleryPage';
import ArtPage from './pages/ArtPage';
import MintPage from './pages/MintPage';
import CheckResult from './pages/CheckResult';
import newHome from './pages/newHome';

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/learn' component={LearnPage} />
        <Route exact path='/art' component={ArtPage} />
        <Route exact path='/mint' component={MintPage} />
        <Route exact path='/whitelist-checker' component={CheckResult} />
        <Route exact path='/newhome' component={newHome} />
      </Switch>
    </Router>

  );
}

export default App;