import React from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LearnPage from './pages/LearnPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/gallery/page/:pageNumber' component={GalleryPage} />
        <Route exact path='/learn' component={LearnPage} />
      </Switch>
    </Router>
  );
}

export default App;