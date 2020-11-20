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
    let classes = `Die fas fa-dice-${diceWords[value - 1]}`;
    if (locked) classes += " Die-locked";
    if (isRolling) classes += " Die-rolling";
    if (disabled) classes += " Die-no-pointer";
    return (
      <i className={classes} onClick={disabled ? null : this.dieClicked}></i>
    );
  }
}

export default Die;
