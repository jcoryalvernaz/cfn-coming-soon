import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import "../css/ComingSoon.css";

class ComingSoon extends Component {
  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      countdown
    } = this.props;

    return (
      <div className="background">
        <Countdown
          futureDate={countdown.futureDate}
          loadingMessage={countdown.loadingMessage}
        />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description text={description.text} />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
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
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    logo: PropTypes.string,
    text: PropTypes.string
  }))
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
