import React, { useState, useEffect } from "react";
import moment, { duration } from "moment";
import useInterval from "react-useinterval";

import "../styles/Countdown.css";

const Countdown = ({ countdownDate }) => {
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  const addZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  };

  const setCountdown = () => {
    const futureDate = moment(countdownDate);

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    setState({
      days,
      hours,
      mins,
      secs
    });
  };

  useInterval(() => {
    setCountdown();
  }, 1000);

  useEffect(() => {
    setCountdown();
  });

  return (
    <div className="countdown">
      {Object.keys(state).map((key, i) => (
        <div key={i} className="countdown-segment">
          <span className="countdown-segment-number">
            {addZeros(state[key])}
          </span>
          <span className="countdown-segment-caption">{key.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
