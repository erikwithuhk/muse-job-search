import React, { Component } from 'react';

const propTypes = {
  items: React.PropTypes.array,
  type: React.PropTypes.string,
};

class FilterCheckboxes extends Component {
  render() {
    const checkboxes = this.props.items.map((item, idx) => (
      <div className={`checkbox-container ${item}-checkbox`} key={idx} >
        <input type="checkbox" id={item} name={this.props.type} value={item} />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
    return (
      <div className={`${this.props.type}-filter-container`}>
        {checkboxes}
      </div>
    );
  }
}

FilterCheckboxes.propTypes = propTypes;

export default FilterCheckboxes;
