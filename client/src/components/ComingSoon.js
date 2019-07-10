import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import logo from "../images/gear-with-holes.svg";
import xmark from "../images/x-mark.svg";
import exclamation from "../images/exclamation.svg";
import check from "../images/check-mark.svg";
import facebook from "../images/fbookicon.svg";
import instagram from "../images/instaicon.svg";
import youtube from "../images/youtubeicon.svg";
import twitter from "../images/twittericon.svg";
import "../css/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2019-08-31 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
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
        logo: facebook,
        text: "Join"
      },
      {
        url: "https://www.instagram.com/codingfromnull",
        logo: instagram,
        text: "Follow"
      },
      {
      url: "https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w",
      logo: youtube,
      text: "Watch"
      },
      {
        url: "https://www.twitter.com/CodingFromNull",
        logo: twitter,
        text: "Tweet"
      }
    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = level => {
    const notification = { ...this.state.notification };
    notification.level = level;
    if (level === "success") {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.message = `Thank you for subscribing to our mailing list.
                        You will be receiving a welcome email shortly.`;
    } else if (level === "warning") {
      notification.src = exclamation;
      notification.alt = "Exclamation Point";
      notification.message = `The email you entered is already on our mailing list.
                        Thank you for joining the community.`;
    } else {
      notification.src = xmark;
      notification.alt = "X Mark";
      notification.message = `There was an issue with your email submission.
                        Please check your email and try again.`
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
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
      notification
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Logo
          alt={logo.alt}
          src={logo.src}
          spinSpeed={logo.spinSpeed}
        />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />
        <Links links={links} />
      </div>
    );
  }
}

ComingSoon.propTypes = {
  countdown: PropTypes.shape({
    futureDate: PropTypes.string.isRequired
  }),
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
  ),
  notification: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    message: PropTypes.string,
    visible: PropTypes.bool,
    level: PropTypes.string
  })
};

ComingSoon.defaultProps = {
  countdown: {
    futureDate: new Date()
  },
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
  ],
  notification: {
    src: "",
    alt: "",
    message: "",
    visible: false,
    level: ""
  }
};

export default ComingSoon;
