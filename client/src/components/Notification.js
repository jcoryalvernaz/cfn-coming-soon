import React, { Component } from "react";

import "../css/Notification.css";

class Notification extends Component {
  render() {
    return (
      <div
        className={`notification ${this.props.level}${
          this.props.visible ? " visible" : ""
        }`}
      >
        <img src={this.props.src} alt={this.props.alt} />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
