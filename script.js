const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

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

// function to intialize the game/starting of the game
function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

// function for changing x and o
function swapTurn() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  //   UI Update
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// function to handle the clicks of the user
function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    swapTurn(); 
  }
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

newGameBtn.addEventListener("click",)
