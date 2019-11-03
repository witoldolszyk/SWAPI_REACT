import React, { Component } from "react";

class CharInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const info = this.props.CharInfo;
    if (!this.state.expanded) {
      return (
        <p className="btn btn-outline-warning btn-lg" onClick={this.open}>
          More Information
        </p>
      );
    }

    return (
      <div>
        <p className="btn btn-outline-warning btn-lg" onClick={this.close}>
          Hide Information
        </p>
        <ul>
          <h2>Height: {info.height}</h2>
          <h2>Mass: {info.mass}</h2>
          <h2>Skin color: {info.skin_color}</h2>
          <h2>Birth date: {info.birth_year}</h2>
          <h2>Eye color: {info.eye_color}</h2>
        </ul>
      </div>
    );
  }
}

export default CharInfo;
