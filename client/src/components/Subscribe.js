import React, { Component } from "react";

import "../css/Subscribe.css";

class Subscribe extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    this.setState({ email: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
        .then(message => {
          return message.json();
        })
        .then(json => {
          if (json.status === "subscribed") {
            this.props.configureNotification("success");
          } else if (json.title === "Member Exists") {
            this.props.configureNotification("warning");
          } else {
            this.props.configureNotification("danger");
          }
          this.props.showNotification();
        })
        .catch(err => {
          console.log("error", err);
        });

      this.props.changeLogoSpeed();

      this.setState({ email: "" });
    }
  };

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form className="subscribe" onSubmit={this.handleSubmit}>
        <input
          className="subscribe-email"
          name="email"
          type="email"
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.email}
          aria-label="Email Address"
        />
        <button className="subscribe-button" type="submit">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Subscribe;
