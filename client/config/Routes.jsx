import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import JobList from '../components/JobList.jsx';
import JobDetails from '../components/JobDetails.jsx';
import Filters from '../components/Filters.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={JobList} />
      <Route path="jobs" >
        <Route path=":id/:short_name" component={JobDetails} />
      </Route>
      <Route path="filter" component={Filters} />
    </Route>
  </Router>
);

export default Routes;
