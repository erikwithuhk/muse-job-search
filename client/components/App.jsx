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
      queryString: '',
      page: 1,
      totalResults: 0,
    };
    this.loadNextPage = this.loadNextPage.bind(this);
    this.generateQueryString = this.generateQueryString.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs(queryString = this.state.queryString) {
    this.setState({ jobs: ['Loading'] });
    const url = `/api/v1/jobs?page=${this.state.page}${queryString}`;
    console.log(url);
    request.get(`/api/v1/jobs?page=${this.state.page}${queryString}`)
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
  generateQueryString(filters) {
    const queries = filters.map((filter) => {
      const strings = Object.keys(filter).map((key) => {
        const encodedValue = encodeURIComponent(filter[key]);
        return `&${key}=${encodedValue}`;
      });
      return strings.join('');
    });
    const queryString = queries.join('');
    this.setState({ queryString });
    this.getJobs(queryString);
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      jobs: this.state.jobs,
      loadNextPage: this.loadNextPage,
      setFilters: this.generateQueryString,
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
