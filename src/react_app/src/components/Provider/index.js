import React, { Component } from "react";

import ReactProvider from "./../../main_app/providers/ReactProvider";
import GameOfLife from "./../../main_app/app/GameOfLife";

import Changelog from "./../Changelog";
import Grid from "./../Grid";

import Form from "./../Form";

const DISPLAY_ITER_COUNT = 10;

export default class Provider extends Component {
  state = { grid: [], counters: [], pauseCaption: "Pause" };

  componentDidMount = () => {
    this.provider = new ReactProvider(this);
    this.game = new GameOfLife({
      provider: this.provider,
      sizeX: 100,
      sizeY: 50,
      speed: 100
    });

    this.game.start();
  };

  onIteration = (grid, counter) => {
    const counterArray = [counter, ...this.state.counters];
    if (counterArray.length > DISPLAY_ITER_COUNT) {
      counterArray.pop();
    }
    this.setState({ grid, counters: counterArray });
  };

  render() {
    const { grid, counters } = this.state;

    return (
      <>
        <Form onPauseClick={this.onPauseClick} pauseCaption={this.state.pauseCaption} />
        <Changelog counters={counters} />
        <Grid grid={grid} />
      </>
    );
  }

  onSubmitClick = () => {};

  onPauseClick = () => {
    if (this.game.gameIsRunning) {
      this.game.pause();
      this.setState({ pauseCaption: "Resume" });
    } else {
      this.game.continue();
      this.setState({ pauseCaption: "Pause" });
    }
  };
}
