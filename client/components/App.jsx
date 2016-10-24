import React, { Component } from 'react';
import request from 'superagent';
import TopNav from './TopNav.jsx'

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: ['Loading'],
      page: 1,
      totalResults: 0,
    };
    this.loadNextPage = this.loadNextPage.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs() {
    this.setState({ jobs: ['Loading'] });
    request.get(`/api/v1/jobs?page=${this.state.page}`)
           .then((response) => {
             this.setState({ jobs: response.body.results, totalResults: response.body.total });
           })
           .catch(err => err);
  }
  loadNextPage() {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
    this.getJobs();
  }
  applyFilters() {
    
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      jobs: this.state.jobs,
      loadNextPage: this.loadNextPage,
      totalResults: this.state.totalResults,
    });
    return (
      <main>
        <TopNav />
        {childrenWithProps}
      </main>
    );
  }
}

App.propTypes = propTypes;

export default App;
