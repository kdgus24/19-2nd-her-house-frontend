import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './pages/Category';
import Main from './pages/main/Main';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
}

export default Routes;
