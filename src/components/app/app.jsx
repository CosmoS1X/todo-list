import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return { todoData: newData };
    });
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDelete={this.deleteItem} />
      </div>
    );
  }
}
