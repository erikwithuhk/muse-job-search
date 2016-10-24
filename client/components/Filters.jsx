import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';
import CompanyFilter from './filters/CompanyFilter.jsx';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
  }
  applyFilters() {
    hashHistory.push('/');
  }
  render() {
    return (
      <div className="filter-container">
        <CompanyFilter />
        <button className="bottom-button" onClick={this.applyFilters}>
          Apply Filters
        </button>
      </div>
    );
  }
}

export default withRouter(Filters);
