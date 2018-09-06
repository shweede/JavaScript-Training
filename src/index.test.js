const { GameOfLife } = require("./index");

class TestProvider {
  constructor({
    onIteration,
    onIsolation,
    onLive,
    onOverPopulation,
    onReproduction
  }) {
    this.onIteration = onIteration || jest.fn();
    this.onIsolation = onIsolation || jest.fn();
    this.onLive = onLive || jest.fn();
    this.onOverPopulation = onOverPopulation || jest.fn();
    this.onReproduction = onReproduction || jest.fn();
  }
}

describe("my GameOfLife code", () => {
  const grid = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ];

  it("should initialize", () => {
    const provider = new TestProvider({});
    const life = new GameOfLife(grid, provider);

    expect(life).toBeInstanceOf(GameOfLife);
    expect(life.size).toBe(7);
    expect(life.grid).toEqual(grid);
    expect(life.provider).toEqual(provider);
  });

  it("#onIteration", () => {
    const onIteration = jest.fn();
    const provider = new TestProvider({ onIteration });
    const life = new GameOfLife(grid, provider);
    life.start();

    expect(onIteration).toBeCalledWith([
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]);
  });

  it("#onIsolation", () => {
    const onIsolation = jest.fn();
    const provider = new TestProvider({ onIsolation });
    const life = new GameOfLife(grid, provider);
    life.start();

    expect(onIsolation).toBeCalledWith(3, 3);
  });

  const gridLive = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, false, true, true, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ];

  it("#onLive", () => {
    const onLive = jest.fn();
    const provider = new TestProvider({ onLive });
    const life = new GameOfLife(gridLive, provider);
    life.start();

    expect(onLive).toHaveBeenCalledTimes(3);
    expect(onLive).toHaveBeenNthCalledWith(1, 2, 3);
    expect(onLive).toHaveBeenNthCalledWith(2, 3, 3);
    expect(onLive).toHaveBeenNthCalledWith(3, 3, 4);
  });

  const gridOverPopulation = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, true, false],
    [false, false, false, true, true, false, false],
    [false, false, false, true, true, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ];

  it("#onOverPopulation", () => {
    const onOverPopulation = jest.fn();
    const provider = new TestProvider({ onOverPopulation });
    const life = new GameOfLife(gridOverPopulation, provider);
    life.start();

    expect(onOverPopulation).toBeCalledWith(2, 4);
  });

  const gridReproduction = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, true, false],
    [false, false, false, false, false, false, false],
    [false, false, false, true, false, true, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ];

  it("#onReproduction", () => {
    const onReproduction = jest.fn();
    const provider = new TestProvider({ onReproduction });
    const life = new GameOfLife(gridReproduction, provider);
    life.start();

    expect(onReproduction).toBeCalledWith(2, 4);
  });
});
