import React, { Component } from "react";
import logo from "../logo.svg";
import ComingSoon from "./ComingSoon";

class App extends Component {
  render() {
    return (
      <ComingSoon
        logo={{
          alt: "Spinning React Logo",
          src: logo
        }}
        title={{
          text: "Coming Soon!"
        }}
        description={{
          text: "This website will be up and running shortly."
        }}
        subscribe={{
          placeholder: "Enter Email Address",
          buttonText: "Submit"
        }}
        links={[
          {
            url: "https://www.facebook.com/JasonAlvernaz",
            logo: "https://image.flaticon.com/icons/svg/220/220200.svg",
            text: "Join"
          },
          {
            url: "https://www.twitter.com/JasonAlvernaz",
            logo: "https://image.flaticon.com/icons/svg/145/145812.svg",
            text: "Follow"
          }
        ]}
        countdown={{
          futureDate: "2019-08-31 00:00:00",
          loadingMessage: "Countdown to Deployment..."
        }}
      />
    );
  }
}

export default App;
