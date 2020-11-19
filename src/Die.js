import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceWords: ["one", "two", "three", "four", "five", "six"],
  };
  constructor() {
    super();
    this.dieClicked = this.dieClicked.bind(this);
  }

  dieClicked() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { diceWords, value, locked, disabled, isRolling } = this.props;
    let classes = `Die fas fa-dice-${diceWords[value - 1]} fa-5x`;
    if (locked) classes += " Die-locked";
    if (isRolling) classes += " Die-rolling";
    return (
      <i className={classes} onClick={this.dieClicked} disabled={disabled}></i>
    );
  }
}

export default Die;
