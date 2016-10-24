import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';
import CategoryFilter from './filters/CategoryFilter.jsx';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.applyFilters = this.applyFilters.bind(this);
  }
  applyFilters(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    this.setState({ filter: input.value });
    // hashHistory.push('/');
  }
  render() {
    return (
      <div className="filter-container">
        <form className="filter-form" onSubmit={this.applyFilters}>
          <div className="filter-form-container">
            <CategoryFilter />
          </div>
          <input
            className="bottom-button bottom-button--fixed"
            type="submit"
            value="Apply Filters"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Filters);
