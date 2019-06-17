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
            this.props.configureToast('success');
          } else if (json.title === "Member Exists") {
            this.props.configureToast('warning');
          } else {
            this.props.configureToast('danger')
          }
          this.props.showToast();
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
        />
        <button className="subscribe-button" type="submit">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Subscribe;
