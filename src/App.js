import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LearnPage from './pages/LearnPage';
import GalleryPage from './pages/GalleryPage';
// import Temp from './components/Temp';

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/learn' component={LearnPage} />
      </Switch>
    </Router>
    // <Temp />
  );
}

export default App;