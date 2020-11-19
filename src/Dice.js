import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            key={idx}
            idx={idx}
            value={d}
            locked={this.props.locked[idx]}
            disabled={this.props.disabled}
            isRolling={this.props.isRolling && !this.props.locked[idx]}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
