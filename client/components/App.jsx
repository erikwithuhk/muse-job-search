import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = propTypes;

export default App;
