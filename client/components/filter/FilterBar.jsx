import React, { Component } from 'react';
import { Icon } from 'react-fa';

class FilterBar extends Component {
  render() {
    return (
      <div className="filter-bar">
        <h2 className="filter-bar_header"><Icon name="filter" /> Filter</h2>
        <form className="filter-form">
          <h3>Category</h3>

        </form>
      </div>
    );
  }
}

export default FilterBar;
