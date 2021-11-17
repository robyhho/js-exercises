const game = () => {
  const X_CLASS = "x";
  const CIRCLE_CLASS = "o";
  let circleTurn;
  let win_lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Getters
  const main_content_div = document.querySelector(".main-content");
  const board_btns = document.querySelectorAll(".board-btn");
  const board = document.querySelector(".board");
  const winner = document.querySelector(".winner");
  const finishModal = document.querySelector(".finish");
  const play_btn = document.getElementById("play-btn");
  const restart_btn = document.querySelector(".restart");

  startGame();

  //EventListeners
  play_btn.addEventListener("click", restartGame);
  restart_btn.addEventListener("click", restartGame);

  //Functions

  function startGame() {
    circleTurn = false;

    //EventListeners

    board_btns.forEach((btn) => {
      btn.addEventListener("click", clicked, { once: true });
    });
    setHoverClass();
  }
  function clicked(e) {
    const btn = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(btn, currentClass);
    //PlaceMark
    //Check for win
    if (checkWin(currentClass)) {
      endGame(false);
    }
    //Check for draw
    else if (isDraw()) {
      endGame(true);
    } else {
      //Switch Turns
      switchTurn();
      setHoverClass();
    }
  }

  function restartGame() {
    finishModal.classList.remove("show");
    board_btns.forEach((btn) => {
      btn.classList.remove(X_CLASS);
      btn.classList.remove(CIRCLE_CLASS);
      btn.removeEventListener("click", clicked);
    });
    winner.innerText = ``;
    startGame();
  }

  function placeMark(btn, currentClass) {
    btn.classList.add(currentClass);
  }

  function switchTurn() {
    circleTurn = !circleTurn;
  }

  function setHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  }

  function isDraw() {
    return [...board_btns].every((btn) => {
      return (
        btn.classList.contains(X_CLASS) || btn.classList.contains(CIRCLE_CLASS)
      );
    });
  }

  function checkWin(currentClass) {
    return win_lines.some((combination) => {
      return combination.every((index) => {
        return board_btns[index].classList.contains(currentClass);
      });
    });
  }

  function endGame(draw) {
    if (draw) {
      winner.innerText = `It's a Draw!`;
    } else {
      winner.innerText = `The Winner is... ${circleTurn ? "O" : "X"}`;
    }
    finishModal.classList.add("show");
  }
};

game();
