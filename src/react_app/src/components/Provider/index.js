import React, { Component } from "react";

import ReactProvider from "./../../main_app/providers/ReactProvider";
import GameOfLife from "./../../main_app/app/GameOfLife";

import Changelog from "./../Changelog";
import Grid from "./../Grid";

import Form from "./../Form";

const DISPLAY_ITER_COUNT = 10;
const DEFAULT_SIZE_X = 100;
const DEFAULT_SIZE_Y = 50;
const DEFAULT_SPEED = 100;

export default class Provider extends Component {
  state = {
    grid: [],
    counters: [],
    pauseCaption: "Pause",
    sizeX: DEFAULT_SIZE_X,
    sizeY: DEFAULT_SIZE_Y,
    speed: DEFAULT_SPEED
  };

  componentDidMount = () => {
    this.provider = new ReactProvider(this);
    this.game = new GameOfLife({
      provider: this.provider,
      sizeX: DEFAULT_SIZE_X,
      sizeY: DEFAULT_SIZE_Y,
      speed: DEFAULT_SPEED
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
        <Form
          onPauseClick={this.onPauseClick}
          onSubmitClick={this.onSubmitClick}
          onUserInputChange={this.onUserInputChange}
          pauseCaption={this.state.pauseCaption}
          sizeX={this.state.sizeX}
          sizeY={this.state.sizeY}
          speed={this.state.speed}
        />
        <Changelog counters={counters} />
        <Grid grid={grid} />
      </>
    );
  }

  onSubmitClick = event => {
    event.preventDefault();
    this.game.restart({
      provider: this.provider,
      sizeX: this.state.sizeX,
      sizeY: this.state.sizeY,
      speed: this.state.speed
    });
  };

  onPauseClick = () => {
    if (this.game.gameIsRunning) {
      this.game.pause();
      this.setState({ pauseCaption: "Resume" });
    } else {
      this.game.continue();
      this.setState({ pauseCaption: "Pause" });
    }
  };

  onUserInputChange = event => {
    this.setState({ [event.target.name]: parseInt(event.target.value) });
  };
}
