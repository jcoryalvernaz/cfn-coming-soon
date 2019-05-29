import React, { Component } from "react";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";

class ComingSoon extends Component {
  state = {
    email: ""
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onSubmitEmail = e => {
    e.preventDefault();

    if (this.state.email) {
      this.setState({ email: "" });
    }
  };

  componentDidMount() {}

  render() {
    const {
      background,
      title,
      description,
      logo,
      subscribe,
      links,
      countdown
    } = this.props;

    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background.image})`,
          backgroundColor: background.color,
          color: background.textColor
        }}
      >
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
          onChange={this.onChangeEmail}
          onSubmit={this.onSubmitEmail}
          email={this.state.email}
        />
        <Links links={links} />
      </div>
    );
  }
}

ComingSoon.defaultProps = {
  background: {
    image: "",
    color: "",
    textColor: ""
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
  ]
};

export default ComingSoon;
