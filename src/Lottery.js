import React, { Component } from "react";
import LottoBall from "./LottoBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery 6 Balls",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls })
    };
  }

  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-Balls">
          {this.state.nums.map(n => (
            <LottoBall num={n} />
          ))}
        </div>
        <div>
          <button onClick={this.handleClick}>Generate</button>
        </div>
      </div>
    );
  }
}

export default Lottery;
