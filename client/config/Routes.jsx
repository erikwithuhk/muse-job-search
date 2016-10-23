import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import JobList from '../components/JobList.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={JobList} />
    </Route>
  </Router>
);

export default Routes;
