import fixtures from "../fixtures";

export default class DOMProvider {
  constructor() {}

  isNotFirstIteration = false;

  onIteration = grid => {
    if (this.isNotFirstIteration) {
      this._updateColorTable(grid);
    } else {
      this.isNotFirstIteration = true;
      this._generateColorTable(grid);
    }
  };
  onIsolation = () => {};
  onLive = () => {};
  onOverPopulation = () => {};
  onReproduction = () => {};
  grid = () => {
    return fixtures.onIteration.given;
  };

  _generateColorTable = grid => {
    const tabletag = document.createElement("table");
    tabletag.className = "gridtable";
    const tbodytag = document.createElement("tbody");
    tbodytag.id = "colorgrid";

    grid.forEach(row => {
      const trtag = document.createElement("tr");
      row.forEach(cell => {
        const tdtag = document.createElement("td");
        tdtag.classList.add("gridtable");
        if (cell) {
          tdtag.classList.add("alive");
        } else {
          tdtag.classList.add("dead");
        }
        trtag.appendChild(tdtag);
      });
      tbodytag.appendChild(trtag);
    });

    tabletag.appendChild(tbodytag);
    document.body.appendChild(tabletag);
  };

  _updateColorTable = grid => {
    let gridElement = document.getElementById("colorgrid");

    grid.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (grid[rowIndex][columnIndex]) {
          gridElement.children[rowIndex].children[columnIndex].classList.add("alive");
        } else {
          gridElement.children[rowIndex].children[columnIndex].classList.add("dead");
        }
      });
    });
  };
}
