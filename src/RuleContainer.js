import React, { Component } from "react";
import Rule from "./Rule";
import "./RuleContainer.css";
import {
  upper,
  ofKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
} from "./Rules";

class RuleContainer extends Component {
  render() {
    const { scores, doScore, isRolling } = this.props;
    return (
      <div className="RuleContainer">
        <h2 className="RuleContainer-title">Upper</h2>
        <section className="RuleContainer-upper">
          <Rule
            name="Ones"
            score={scores.ones}
            doScore={() => doScore("ones", upper, 1)}
            isRolling={isRolling}
          />
          <Rule
            name="Twos"
            score={scores.twos}
            doScore={() => doScore("twos", upper, 2)}
            isRolling={isRolling}
          />
          <Rule
            name="Threes"
            score={scores.threes}
            doScore={() => doScore("threes", upper, 3)}
            isRolling={isRolling}
          />
          <Rule
            name="Fours"
            score={scores.fours}
            doScore={() => doScore("fours", upper, 4)}
            isRolling={isRolling}
          />
          <Rule
            name="Fives"
            score={scores.fives}
            doScore={() => doScore("fives", upper, 5)}
            isRolling={isRolling}
          />
          <Rule
            name="Sixes"
            score={scores.sixes}
            doScore={() => doScore("sixes", upper, 6)}
            isRolling={isRolling}
          />
        </section>
        <h2 className="RuleContainer-title">Lower</h2>
        <section className="RuleContainer-lower">
          <Rule
            name="Three Of Kind"
            score={scores.threeOfKind}
            doScore={() => doScore("threeOfKind", ofKind, 3)}
            isRolling={isRolling}
          />
          <Rule
            name="Four Of Kind"
            score={scores.fourOfKind}
            doScore={() => doScore("fourOfKind", ofKind, 4)}
            isRolling={isRolling}
          />
          <Rule
            name="Full House"
            score={scores.fullHouse}
            doScore={() => doScore("fullHouse", fullHouse, 25)}
            isRolling={isRolling}
          />
          <Rule
            name="Small Straight"
            score={scores.smallStraight}
            doScore={() => doScore("smallStraight", smallStraight, 30)}
            isRolling={isRolling}
          />
          <Rule
            name="Large Straight"
            score={scores.largeStraight}
            doScore={() => doScore("largeStraight", largeStraight, 40)}
            isRolling={isRolling}
          />
          <Rule
            name="Yahtzee"
            score={scores.yahtzee}
            doScore={() => doScore("yahtzee", yahtzee, 50)}
            isRolling={isRolling}
          />
          <Rule
            name="Chance"
            score={scores.chance}
            doScore={() => doScore("chance", ofKind, 0)}
            isRolling={isRolling}
          />
        </section>
      </div>
    );
  }
}

export default RuleContainer;
