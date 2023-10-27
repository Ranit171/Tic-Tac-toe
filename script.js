const boxes = document.querySelectorAll(".box");
const gameInfo = dociment.querySelector(".game-info");
const newGameBtn = dociment.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winniPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function to intialize the game
function initGame() {
  currentPlayer = "x";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  newGameBtn.classList.remove("active");
}
