const changelogIterCount = 10;

export default class DOMProvider {
  constructor() {}

  isNotFirstIteration = false;
  iterationNo = 0;

  isolationCounter = 0;
  liveCounter = 0;
  overPopulationCounter = 0;
  reproductionCounter = 0;

  onIteration = grid => {
    if (this.isNotFirstIteration) {
      this._updateColorTable(grid);
    } else {
      this.isNotFirstIteration = true;
      this._generateColorTable(grid);
    }
    this.iterationNo++;
    this._addChangelogtableEntry();
    this._resetCounters();
  };

  onIsolation = () => {
    this.isolationCounter++;
  };

  onLive = () => {
    this.liveCounter++;
  };

  onOverPopulation = () => {
    this.overPopulationCounter++;
  };

  onReproduction = () => {
    this.reproductionCounter++;
  };

  grid = (xSize, ySize) => {
    return Array(ySize)
      .fill(null)
      .map(() =>
        Array(xSize)
          .fill(null)
          .map(() => Math.random() >= 0.5)
      );
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
    const gridElement = document.getElementById("colorgrid");

    grid.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let element = gridElement.children[rowIndex].children[columnIndex];
        if (cell) {
          element.classList.remove("dead");
          element.classList.add("alive");
        } else {
          element.classList.remove("alive");
          element.classList.add("dead");
        }
      });
    });
  };

  _addChangelogtableEntry = () => {
    const gridElement = document.getElementById("changelog");
    if (this.iterationNo > changelogIterCount) {
      gridElement.removeChild(gridElement.children[changelogIterCount - 1]);
    }
    const trtag = this._generateChangelogRow();
    gridElement.insertBefore(trtag, gridElement.children[0]);
  };

  _resetCounters = () => {
    this.isolationCounter = 0;
    this.liveCounter = 0;
    this.overPopulationCounter = 0;
    this.reproductionCounter = 0;
  };

  _generateChangelogRow = () => {
    const trtag = document.createElement("tr");

    const tdtagIter = document.createElement("td");
    tdtagIter.textContent = this.iterationNo;
    trtag.appendChild(tdtagIter);

    const tdtagIsolation = document.createElement("td");
    tdtagIsolation.textContent = this.isolationCounter;
    trtag.appendChild(tdtagIsolation);

    const tdtagLive = document.createElement("td");
    tdtagLive.textContent = this.liveCounter;
    trtag.appendChild(tdtagLive);

    const tdtagOverPop = document.createElement("td");
    tdtagOverPop.textContent = this.overPopulationCounter;
    trtag.appendChild(tdtagOverPop);

    const tdtagReproduct = document.createElement("td");
    tdtagReproduct.textContent = this.reproductionCounter;
    trtag.appendChild(tdtagReproduct);

    return trtag;
  };
}
