import React, { Component } from 'react';
import cn from 'classnames';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classNames = cn('btn', { 'btn-info': isActive, 'btn-outline-secondary': !isActive });
      return (
        <button
          type="button"
          className={classNames}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
