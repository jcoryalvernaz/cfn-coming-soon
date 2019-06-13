import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import logo from "../logo.svg"
import "../css/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2019-08-31 00:00:00"
    },
    logo: {
      alt: "Spinning React Logo",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "Coming Soon!"
    },
    description: {
      text: "This website will be up and running shortly."
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
    links: [
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
    ]
  };

  toggleLogoSpeed = () => {
    const logo = { ...this.state.logo }
    logo.spinSpeed === 'slow' ? logo.spinSpeed = 'fast' : logo.spinSpeed = 'slow';
    this.setState({ logo });
  };

  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      countdown
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} toggleLogoSpeed={this.toggleLogoSpeed}/>
        <Title text={title.text} />
        <Description text={description.text} />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          toggleLogoSpeed={this.toggleLogoSpeed}
        />
        <Links links={links} />
      </div>
    );
  }
}

ComingSoon.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.shape({
    text: PropTypes.string
  }),
  description: PropTypes.shape({
    text: PropTypes.string
  }),
  subscribe: PropTypes.shape({
    placeholder: PropTypes.string,
    buttonText: PropTypes.string
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      logo: PropTypes.string,
      text: PropTypes.string
    })
  )
};

ComingSoon.defaultProps = {
  logo: {
    alt: "",
    src: ""
  },
  title: {
    text: ""
  },
  description: {
    text: ""
  },
  subscribe: {
    placeholder: "",
    buttonText: ""
  },
  links: [
    {
      url: "",
      logo: "",
      text: ""
    }
  ]
};

export default ComingSoon;
