// prettier-ignore
const POSITIONS = [
  [-1,-1],[-1, 0],[-1, 1],
  [ 0,-1],        [ 0, 1],
  [ 1,-1],[ 1, 0],[ 1, 1]
]

class GameOfLife {
  constructor(initialGrid, provider) {
    this.grid = [...initialGrid];
    this.provider = provider;
    this.size = this.grid.length;
  }

  start() {
    this._iterate();
  }

  _iterate() {
    const nextGrid = [];
    this.grid.forEach((row, rowIndex) => {
      const rowReducer = (rowArray, cell, colIndex) => {
        const neighbours = this._countNeighbours(rowIndex, colIndex);
        if (cell) {
          switch (true) {
            case neighbours < 2:
              this.provider.onIsolation(rowIndex, colIndex);
              rowArray.push(false);
              break;
            case neighbours === 2 || neighbours === 3:
              this.provider.onLive(rowIndex, colIndex);
              rowArray.push(true);
              break;
            case neighbours > 3:
              this.provider.onOverPopulation(rowIndex, colIndex);
              rowArray.push(false);
              break;
          }
        } else if (neighbours === 3) {
          this.provider.onReproduction(rowIndex, colIndex);
          rowArray.push(true);
        } else {
          rowArray.push(false);
        }
        return rowArray;
      };
      const reducedRow = row.reduce(rowReducer, []);
      nextGrid.push(reducedRow);
    });

    this.provider.onIteration(nextGrid);
  }

  _countNeighbours(column, row) {
    const reducer = (accumulator, [y, x]) => {
      const posY = row + y;
      const posX = column + x;
      if (this._outOfBounds(posX, posY)) {
        return accumulator;
      } else {
        return accumulator + Number(this.grid[posX][posY]);
      }
    };

    return POSITIONS.reduce(reducer, 0);
  }

  _outOfBounds(posY, posX) {
    return posY < 0 || posX < 0 || posY >= this.size || posX >= this.size;
  }
}

module.exports = {
  GameOfLife
};
