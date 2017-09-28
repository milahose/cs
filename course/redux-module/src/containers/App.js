import React, { Component, PropTypes } from 'react';
import TodoContainer from './TodoContainer';

class App extends Component {
  render() {
    return (
      <div>
        <TodoContainer />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
