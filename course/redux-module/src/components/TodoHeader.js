import React, { PropTypes } from 'react';

const TodoHeader = (props) => (
  <header>
    <h1>Todo List</h1>
  </header>
);

TodoHeader.propTypes = {
  taskName: PropTypes.string,
};

export default TodoHeader;
