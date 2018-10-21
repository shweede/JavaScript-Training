import GameOfLife from "./GameOfLife";
import { DOMProvider } from "./../providers";

const DEFAULT_SIZE_X = 100;
const DEFAULT_SIZE_Y = 50;
const DEFAULT_SPEED = 100;

document.querySelector("#sizeX").setAttribute("value", DEFAULT_SIZE_X);
document.querySelector("#sizeY").setAttribute("value", DEFAULT_SIZE_Y);
document.querySelector("#speed").setAttribute("value", DEFAULT_SPEED);

const game = new GameOfLife({
  provider: new DOMProvider(),
  sizeX: DEFAULT_SIZE_X,
  sizeY: DEFAULT_SIZE_Y,
  speed: DEFAULT_SPEED
});

game.start();

const pauseGame = () => {
  if (game.gameIsRunning) {
    game.pause();
    document.querySelector("#pause").textContent = "Continue";
  } else {
    game.continue();
    document.querySelector("#pause").textContent = "Pause";
  }
};

const restartGame = event => {
  event.preventDefault();

  let sizeX = parseInt(document.querySelector("#sizeX").value);
  let sizeY = parseInt(document.querySelector("#sizeY").value);
  let speed = parseInt(document.querySelector("#speed").value);

  game.restart({ sizeX, sizeY, speed, provider: new DOMProvider() });

  document.querySelector("#pause").textContent = "Pause";
};

document.querySelector("#pause").addEventListener("click", pauseGame);
document.querySelector("form").addEventListener("submit", restartGame);
