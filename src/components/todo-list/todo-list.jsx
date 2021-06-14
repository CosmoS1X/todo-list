import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos,
  onDelete,
  onToggleImportant,
  onToggleDone,
}) => {
  const elements = todos.map((item) => {
    const {
      label,
      important,
      done,
      id,
    } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          label={label}
          important={important}
          done={done}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
