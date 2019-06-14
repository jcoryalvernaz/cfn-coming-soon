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
        <figure>
          <img src={this.props.src} alt={this.props.alt} />
          <figcaption>{this.props.message}</figcaption>
        </figure>
      </div>
    );
  }
}

export default Toast;
