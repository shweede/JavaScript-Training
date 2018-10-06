import GameOfLife from "./GameOfLife";
import { DOMProvider } from "./../providers";

const game = new GameOfLife({
  provider: new DOMProvider(),
  sizeX: 100,
  sizeY: 50,
  speed: 100
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
};

document.getElementById("pause").addEventListener("click", pauseGame);
document.querySelector("form").addEventListener("submit", restartGame);
