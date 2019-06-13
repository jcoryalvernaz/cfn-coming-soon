import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "../css/Subscribe.css";
import "react-toastify/dist/ReactToastify.css"

class Subscribe extends Component {
  state = {
    email: "",
    message: ""
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
          if (json.status !== 'subscribed') {
            this.setState({
              message: "There was a problem with your email submission. Please check the email and try again."
            });
            this.error();
          } else {
            this.setState({
              message: 'Thank you for subscribing to our mailing list. You will be receiving a welcome email shortly.'
            });
            this.success();
          }
        })
        .catch(err => {
          console.log("error", err);
        });

      this.props.toggleLogoSpeed();

      setTimeout(this.props.toggleLogoSpeed, 1000);

      this.setState({ email: "" });
    }
  };

  success = () => toast.success(this.state.message);

  error = () => toast.error(this.state.message);

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form className="subscribe" onSubmit={e => this.handleSubmit(e)}>
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
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
         />
      </form>
    );
  }
}

export default Subscribe;
