import React, { Component } from 'react';
import request from 'superagent';
import { Icon } from 'react-fa';
import Job from './Job.jsx';

const propTypes = {

};

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      jobs: ['Loading'],
      page: 1,
    };
    this.loadNextPage = this.loadNextPage.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs() {
    this.setState({ jobs: ['Loading'] });
    request.get(`/api/v1/jobs?page=${this.state.page}`)
           .then(response => this.setState({ jobs: response.body }))
           .catch(err => console.error(err));
  }
  createJobElements() {
    if (this.state.jobs.length === 0) {
      return 'No jobs found';
    } else if (this.state.jobs[0] === 'Loading') {
      return (
        <div className="loading-spinner">
          <Icon spin name="spinner" size="5x" />
        </div>
      );
    }
    return this.state.jobs.map(job => (
      <Job
        key={job.id}
        title={job.title}
        company={job.company}
        location={job.location}
        postedDate={parseInt(job.postedDate, 10)}
      />
    ));
  }
  loadNextPage() {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
    this.getJobs();
  }
  render() {
    const results = this.createJobElements();
    let loadMoreButton;
    if (this.state.jobs.length > 1) {
      loadMoreButton = (
        <button className="load-more-button" onClick={this.loadNextPage}>More jobs</button>
      );
    }
    return (
      <ul className="job-list">
        <h2 className="job-list-header">23,344 jobs found</h2>
        {results}
        {loadMoreButton}
      </ul>
    );
  }
}

export default JobList;
