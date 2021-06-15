import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { onAddItem } = this.props;
    const { label } = this.state;
    onAddItem(label);
    this.setState({ label: '' });
  }

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          required
          value={label}
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add task
        </button>
      </form>
    );
  }
}
