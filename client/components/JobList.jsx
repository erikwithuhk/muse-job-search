import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'react-fa';
import Job from './Job.jsx';

const propTypes = {
  jobs: React.PropTypes.array,
  loadNextPage: React.PropTypes.func,
  totalResults: React.PropTypes.number,
};

class JobList extends Component {
  createJobElements() {
    if (this.props.jobs.length === 0) {
      return 'No jobs found';
    } else if (this.props.jobs[0] === 'Loading') {
      return (
        <div className="loading-spinner">
          <Icon spin name="spinner" size="5x" />
        </div>
      );
    }
    return this.props.jobs.map(job => (
      <Job
        key={job.id}
        id={job.id}
        title={job.title}
        company={job.company}
        location={job.location}
        postedDate={parseInt(job.postedDate, 10)}
        shortName={job.shortName}
      />
    ));
  }
  render() {
    const results = this.createJobElements();
    let loadMoreButton;
    if (this.props.jobs.length > 1) {
      loadMoreButton = (
        <button className="bottom-button load-more-button" onClick={this.props.loadNextPage}>
          More jobs
        </button>
      );
    }
    return (
      <div className="job-list-container">
        <div className="job-list-header">
          <h2 className="page-title">Browse Jobs</h2>
          <h3 className="results-count">{this.props.totalResults} jobs found</h3>
          <Link to="/filter" className="filter-link"><Icon name="sliders" /> Filter</Link>
        </div>
        <ul className="job-list">
          {results}
          {loadMoreButton}
        </ul>
      </div>
    );
  }
}

JobList.propTypes = propTypes;

export default JobList;
