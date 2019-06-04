import React, { Component } from "react";

class Subscribe extends Component {

  render() {
    const {
      placeholder,
      buttonText
    } = this.props;

    return (

        <form className="subscribe" onSubmit={(e) => this.props.onSubmit(e)}>
          <input
            className="subscribe-email"
            type="email"
            placeholder={placeholder}
            onChange={(e) => this.props.onChange(e)}
            value={this.props.email}
          />
          <button className="subscribe-button" type="submit">
            {buttonText}
          </button>
        </form>

    );
  }
}

export default Subscribe;
