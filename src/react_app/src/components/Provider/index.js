import React, { Component } from "react";

import ReactProvider from "./../../main_app/providers/ReactProvider";
import GameOfLife from "./../../main_app/app/GameOfLife";

import Changelog from "./../Changelog";
import Grid from "./../Grid";

export default class Provider extends Component {
  state = { grid: [], counter: {} };

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
    this.setState({ grid, counter });
  };

  render() {
    const { grid, counter } = this.state;

    return (
      <>
        <Grid grid={grid} />
        <Changelog counter={counter} />
      </>
    );
  }
}
