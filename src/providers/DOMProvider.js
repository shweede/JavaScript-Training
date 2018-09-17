import GameOfLife from "../app/GameOfLife";
import fixtures from "../fixtures";

export default class DOMProvider {
  constructor() {}

  onIteration = grid => {
    debugger;
  };
  onIsolation = () => {};
  onLive = () => {};
  onOverPopulation = () => {};
  onReproduction = () => {};
  grid = () => {
    return fixtures.onIteration.given;
  };
}
