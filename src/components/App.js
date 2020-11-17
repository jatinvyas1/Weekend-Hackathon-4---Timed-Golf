import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0,
      start: false,
      ballPosition: { top: "0px", left: "0px" }
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    // this.shiftBall = this.shiftBall.bind(this);
  }

  buttonClickHandler() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    console.log(this.state.time);
    this.setState({ start: true });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.shiftBall);
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <p className="heading-timer">{this.state.time}</p>

        <div className="ball" style={this.state.ballPosition}></div>
        <div className="hole"></div>
        <button
          className="start ballProvider"
          onClick={this.buttonClickHandler}
        >
          Start
        </button>
      </>
    );
  }
}

export default Timer;
