import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Teams from './pages/team';
import Result from "./pages/result";

function App() {
  return (
      <Router basename="/sahapurschool.edu.np">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/team' component={Teams} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
  );
}

export default App;
