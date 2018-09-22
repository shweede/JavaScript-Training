import GameOfLife from "../app/GameOfLife";
import fixtures from "../fixtures";

export default class DOMProvider {
  constructor() {}

  onIteration = grid => {
    const tabletag = document.createElement("table");
    tabletag.className = "gridtable";
    const tbodytag = document.createElement("tbody");

    grid.forEach(row => {
      const trtag = document.createElement("tr");
      row.forEach(cell => {
        const tdtag = document.createElement("td");
        if (cell) {
          tdtag.className = "alive";
        } else {
          tdtag.className = "dead";
        }
        trtag.appendChild(tdtag);
      });
      tbodytag.appendChild(trtag);
    });

    tabletag.appendChild(tbodytag);
    document.body.appendChild(tabletag);
  };
  onIsolation = () => {};
  onLive = () => {};
  onOverPopulation = () => {};
  onReproduction = () => {};
  grid = () => {
    return fixtures.onIteration.given;
  };
}
