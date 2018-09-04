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
      const rowArray = [];
      row.forEach((cell, colIndex) => {
        const neighbours = this._countNeighbours(rowIndex, colIndex);
        rowArray.push(false);
        if (cell) {
          switch (true) {
            case neighbours < 2:
              this.provider.onIsolation(rowIndex, colIndex);
              break;
            case neighbours === 2 || neighbours === 3:
              this.provider.onLive(rowIndex, colIndex);
              break;
            case neighbours > 3:
              this.provider.onOverPopulation(rowIndex, colIndex);
              break;
          }
        } else if (neighbours === 3) {
          this.provider.onReproduction(rowIndex, colIndex);
        }
      });
      nextGrid.push(rowArray);
    });

    // RULE 1
    // RULE 2
    // RULE 3
    // RULE 4

    this.provider.onIteration(nextGrid);
  }

  _countNeighbours(column, row) {
    let count = 0;

    POSITIONS.forEach(([y, x]) => {
      const posY = row + y;
      const posX = column + x;
      if (this._outOfBounds(posX, posY)) return;

      count += Number(this.grid[posX][posY]);
    });

    return count;
  }

  _outOfBounds(posY, posX) {
    return posY < 0 || posX < 0 || posY >= this.size || posX >= this.size;
  }
}

module.exports = {
  GameOfLife
};
