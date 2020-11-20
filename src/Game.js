import React, { Component } from "react";
import Dice from "./Dice";
import RuleContainer from "./RuleContainer";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor() {
    super();
    this.state = {
      dice: Array.from({ length: NUM_DICE }, () =>
        Math.ceil(Math.random() * 6)
      ),
      scores: {},
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      isRolling: false,
    };
    this.toggleLocked = this.toggleLocked.bind(this);
    this.roll = this.roll.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.doScore = this.doScore.bind(this);
  }

  componentDidMount() {
    this.roll();
  }

  animateRoll() {
    this.setState({ isRolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
  }

  roll() {
    // All dice get locked after the last roll
    this.setState((st) => ({
      dice: st.dice.map((d, idx) =>
        st.locked[idx] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft === 1 ? Array(NUM_DICE).fill(true) : st.locked,
      rollsLeft: st.rollsLeft - 1,
      isRolling: false,
    }));
  }

  toggleLocked(idx) {
    this.setState((st) => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1),
      ],
    }));
  }

  displayRerollMessage() {
    const messages = [
      "0 Rerolls Left",
      "1 Reroll Left",
      "2 Rerolls Left",
      "Starting Round",
    ];

    return messages[this.state.rollsLeft];
  }

  doScore(ruleName, ruleFn, secondParam) {
    this.setState((st) => ({
      scores: {
        ...st.scores,
        [ruleName]: ruleFn(this.state.dice, secondParam),
      },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.animateRoll();
  }

  getTotalScore() {
    let totalScore = 0;
    for (let key in this.state.scores) {
      const sc = this.state.scores[key];
      if (sc) totalScore += sc;
    }
    return totalScore;
  }

  render() {
    const { dice, scores, locked, rollsLeft, isRolling } = this.state;
    return (
      <div className="Game">
        <h1 className="Game-title">Yahtzee</h1>
        <Dice
          dice={dice}
          locked={locked}
          rollsLeft={rollsLeft}
          isRolling={isRolling}
          handleClick={this.toggleLocked}
        />
        <div className="Game-reroll-button-container">
          <button
            className="Game-reroll-button"
            onClick={this.animateRoll}
            disabled={locked.every((d) => d) || isRolling}
          >
            {this.displayRerollMessage()}
          </button>
        </div>
        <RuleContainer
          scores={scores}
          doScore={this.doScore}
          isRolling={isRolling}
        />
        <div className="Game-total-score">
          Total Score: {this.getTotalScore()}
        </div>
      </div>
    );
  }
}

export default Game;
