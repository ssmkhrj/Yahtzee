import React, { Component } from "react";
import "./Rule.css";

class Rule extends Component {
  render() {
    const { name, score, doScore, isRolling } = this.props;
    const disabled = score !== undefined;
    return (
      <div
        className={`Rule ${
          disabled ? "Rule-disabled" : !isRolling ? "Rule-active" : ""
        }`}
        onClick={disabled || isRolling ? null : doScore}
      >
        <div>{name}</div>
        <div className="Rule-score">{score}</div>
      </div>
    );
  }
}

export default Rule;
