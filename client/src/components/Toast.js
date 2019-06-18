import React, { Component } from "react";
import "../css/Toast.css";

class Toast extends Component {
  render() {
    return (
      <div
        className={`toast ${this.props.level}${
          this.props.visible ? " visible" : ""
        }`}
      >
        <img src={this.props.src} alt={this.props.alt} />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Toast;
