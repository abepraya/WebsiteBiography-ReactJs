import React, { Component } from 'react';
import Body from './components/Menu/Body';
import Loader from './components/Menu/Loader';

class App extends Component {
  render() {
    return (
      <div>
        <Loader />
        <Body />
      </div>
    );
  }
}

export default App;