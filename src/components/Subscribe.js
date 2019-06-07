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
      const authString = btoa(`anystring:${process.env.API_KEY}`);
      console.log(process.env.API_KEY);
      console.log(process.env.LIST_ID);
      fetch(`https://us20.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members/`, {
        method: 'POST',
        mode: 'no-cors',
        cach: 'no-cache',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + authString
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({
          email_address: this.state.email,
          status: 'subscribed'
        }),
      }).then(data => console.log(data)).catch(error => console.log(`Error: ${error}`));

      this.setState({ email: "" });
    }
  };

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form name="subscribe" netlify className="subscribe" onSubmit={e => this.onSubmit(e)}>
        <input
          className="subscribe-email"
          name="email"
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
