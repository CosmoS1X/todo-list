import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSearchChange = (e) => {
    const { onSearchChange } = this.props;
    const term = e.target.value;
    this.setState({ term });
    onSearchChange(term);
  }

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        value={term}
        onChange={this.onSearchChange}
      />
    );
  }
}
