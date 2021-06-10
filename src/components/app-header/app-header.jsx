import React from 'react';

import './app-header.css';

const AppHeader = ({ toDo, done }) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>{done} done, {toDo} more to do</h2>
  </div>
);

export default AppHeader;
