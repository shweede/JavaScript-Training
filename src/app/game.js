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

document.getElementById("pause").addEventListener("click", pauseGame);
