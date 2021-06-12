import React, { Component } from 'react';
import cn from 'classnames';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false,
    };
  }

  onLabelClick = () => {
    this.setState(({ done }) => ({ done: !done }));
  };

  onMarkImportant = () => {
    this.setState(({ important }) => ({ important: !important }));
  };

  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;

    const classNames = cn('todo-list-item', { done, important });

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="bi bi-exclamation-lg" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="bi bi-trash" />
        </button>
      </span>
    );
  }
}
