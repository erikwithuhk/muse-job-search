import React, { Component } from 'react';
import TopNav from './TopNav.jsx'

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  render() {
    return (
      <main>
        <TopNav />
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = propTypes;

export default App;
