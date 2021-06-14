import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      term: '',
      filter: 'all',
    };
  }

  createTodoItem = (label) => ({
    label,
    important: false,
    done: false,
    id: uniqueId(),
  })

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

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];

      return { todoData: newData };
    });
  }

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.label
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1);
  }

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        throw new Error('Unexpected error in filter function');
    }
  }

  toggleProperty = (data, id, propName) => {
    const index = data.findIndex((item) => item.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [
      ...data.slice(0, index),
      newItem,
      ...data.slice(index + 1),
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => (
      { todoData: this.toggleProperty(todoData, id, 'important') }
    ));
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => (
      { todoData: this.toggleProperty(todoData, id, 'done') }
    ));
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleData = this.filter(this.search(todoData, term), filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleData}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}
