import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import logo from "../gear.svg";
import xmark from "../x-mark.svg";
import exclamation from "../exclamation.svg";
import check from "../check-mark.svg";
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
      text: "The Coding From Null course platform will be up and running shortly. Please subscribe to our newsletter below to receive updates when new course material is available."
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
    ],
    toast: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureToast = level => {
    const toast = { ...this.state.toast };
    toast.level = level;
    if (level === "success") {
      toast.src = check;
      toast.alt = "Check Mark";
      toast.message = `Thank you for subscribing to our mailing list.
                        You will be receiving a welcome email shortly.`;
    } else if (level === "warning") {
      toast.src = exclamation;
      toast.alt = "Exclamation Point";
      toast.message = `The email you entered is already on our mailing list.
                        Thank you for joining the community.`;
    } else {
      toast.src = xmark;
      toast.alt = "X Mark";
      toast.message = `There was an issue with your email submission.
                        Please check your email and try again.`
    }
    this.setState({ toast });
  };

  showToast = () => {
    const toast = { ...this.state.toast };
    toast.visible = true;
    this.setState({ toast }, () => {
      setTimeout(() => {
        toast.visible = false;
        this.setState({ toast });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      countdown,
      toast
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Logo
          alt={logo.alt}
          src={logo.src}
          spinSpeed={logo.spinSpeed}
          toggleLogoSpeed={this.toggleLogoSpeed}
        />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={toast.src}
          alt={toast.alt}
          message={toast.message}
          visible={toast.visible}
          level={toast.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureToast={this.configureToast}
          showToast={this.showToast}
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
