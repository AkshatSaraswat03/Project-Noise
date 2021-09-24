import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route path='/' exact component={HomePage} />
        <Route path='/gallery' exact component={GalleryPage} />
        <Route path='/learn' component={LearnPage} />
      </Switch>
    </Router>
  );
}

export default App;