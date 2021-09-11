import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
