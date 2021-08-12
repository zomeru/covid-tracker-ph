import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Nav />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
