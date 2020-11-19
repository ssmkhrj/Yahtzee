import React, { Component } from "react";
import Dice from "./Dice";
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
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      isRolling: false,
    };
    this.toggleLocked = this.toggleLocked.bind(this);
    this.roll = this.roll.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  componentDidMount() {
    this.animateRoll();
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
    // If no rolls are left OR dice are animating, locking cannot be toggled
    if (!this.state.rollsLeft || this.state.isRolling) return;

    this.setState((st) => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1),
      ],
    }));
  }

  calcRerollMessage() {
    const messages = [
      "0 Rerolls Left",
      "1 Reroll Left",
      "2 Rerolls Left",
      "Starting Round",
    ];

    return messages[this.state.rollsLeft];
  }

  render() {
    const { dice, locked, rollsLeft, isRolling } = this.state;
    return (
      <div className="Game">
        <h1 className="Game-title">Yahtzee</h1>
        <Dice
          dice={dice}
          locked={locked}
          disabled={rollsLeft === 0}
          isRolling={isRolling}
          handleClick={this.toggleLocked}
        />
        <button
          className="Game-reroll-button"
          onClick={this.animateRoll}
          disabled={locked.every((d) => d) || isRolling}
        >
          {this.calcRerollMessage()}
        </button>
      </div>
    );
  }
}

export default Game;
