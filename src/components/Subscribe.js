import React, { Component } from "react";
import "../css/Subscribe.css";

class Subscribe extends Component {
  state = {
    email: ""
  };

  onChange = e => {
    this.setState({ email: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.email) {
      //TODO add email integration
      this.setState({ email: "" });
    }
  };

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form className="subscribe" onSubmit={e => this.onSubmit(e)}>
        <input
          className="subscribe-email"
          type="email"
          placeholder={placeholder}
          onChange={e => this.onChange(e)}
          value={this.state.email}
        />
        <button className="subscribe-button" type="submit">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Subscribe;
