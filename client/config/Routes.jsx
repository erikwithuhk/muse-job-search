import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import JobResults from '../components/JobResults.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={JobResults} />
    </Route>
  </Router>
);

export default Routes;
