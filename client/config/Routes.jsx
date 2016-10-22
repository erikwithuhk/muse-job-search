import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import JobResults from '../components/JobResults.jsx';

const Routes = () => (
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={JobResults} />
    </Route>
  </Router>
);

export default Routes;
