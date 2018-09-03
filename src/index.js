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
    this.grid.forEach((row, columnIndex) => {
      row.forEach((element, rowIndex) => {
        const neighbours = this._countNeighbours(columnIndex, rowIndex);
        neighbours && console.log(neighbours, columnIndex, rowIndex);
      });
    });

    // RULE 1
    // RULE 2
    // RULE 3
    // RULE 4
    this.provider.onIteration(this.grid);
  }

  _countNeighbours(column, row) {
    let count = 0;

    POSITIONS.forEach(([x, y]) => {
      const posX = row + x;
      const posY = column + y;
      if (this._outOfBounds(posX, posY)) return;

      count += Number(this.grid[posX][posY]);
    });

    return count;
  }

  _outOfBounds(posX, posY) {
    return posX < 0 || posY < 0 || posX >= this.size || posY >= this.size;
  }
}

module.exports = {
  GameOfLife
};
