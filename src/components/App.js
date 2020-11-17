import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0,
      start: false
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.shiftBall = this.shiftBall.bind(this);
  }
  shiftBall(event) {
    event.preventDefault();
    if (!this.state.start) {
      return;
    }
    if (this.state.x === 250 && this.state.y === 250) {
      return;
    }
    if (event.keyCode === 37) {
      this.setState({ y: this.state.y - 5 });
    }
    if (event.keyCode === 39) {
      this.setState({ y: this.state.y + 5 });
    }
    if (event.keyCode === 38) {
      this.setState({ x: this.state.x - 5 });
    }
    if (event.keyCode === 40) {
      this.setState({ x: this.state.x + 5 });
    }
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.interval);
    }
  }
  buttonClickHandler() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    console.log(this.state.time);
    this.setState({ start: true });
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => this.shiftBall(event));
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <p className="heading-timer">{this.state.time}</p>

        <div
          className="ball"
          style={{ top: this.state.x + "px", left: this.state.y + "px" }}
        ></div>
        <div className="hole"></div>
        {!this.state.start && (
          <button
            className="start ballProvider"
            onClick={this.buttonClickHandler}
          >
            Start
          </button>
        )}
      </>
    );
  }
}

export default Timer;
