import React from 'react';
import cn from 'classnames';
import './todo-list-item.css';

const TodoListItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}) => {
  const classNames = cn('todo-list-item', { done, important });

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
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
};

export default TodoListItem;
