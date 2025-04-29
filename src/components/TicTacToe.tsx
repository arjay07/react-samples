import { useState } from "react";
import styles from "./TicTacToe.module.css";

export default function TicTacToe() {
  const emptyBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [statusMessage, setStatusMessage] = useState("It's Player X's turn");
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameState, setGameState] = useState(emptyBoard);

  const setCell = (x: number, y: number, value: "X" | "O") => {
    if (gameState[y][x] || checkWinner() !== 0) return;

    const boardClone = [...gameState];
    boardClone[y][x] = value;
    setGameState(boardClone);

    switch (checkWinner()) {
      case 1:
        setStatusMessage("Player X wins!");
        return;
      case -1:
        setStatusMessage("Player O wins!");
        return;
      case 2:
        setStatusMessage("It's a tie!");
        return;
    }

    const player = currentPlayer === "X" ? "O" : "X";

    setCurrentPlayer(player);
    setStatusMessage(`It's Player ${player}'s turn`);
  };

  const resetGame = () => {
    setGameState(emptyBoard);
    const player = "X";
    setCurrentPlayer(player);
    setStatusMessage(`It's Player ${player}'s turn`);
  };

  const checkWinner = () => {
    // Convert X to 1
    // Convert O to -1
    // Convert empty to 0

    const board = [...gameState].map((row) =>
      row.map((val) => (val === "X" ? 1 : val === "O" ? -1 : 0)),
    );

    // Check rows & columns
    for (let col = 0; col < 3; col++) {
      let rowSum = 0;
      let colSum = 0;
      for (let row = 0; row < 3; row++) {
        colSum += board[row][col];
        rowSum += board[col][row];
      }

      if (rowSum === 3 || colSum === 3) return 1;
      if (rowSum === -3 || colSum === -3) return -1;
    }

    // Check diagonals
    let lrDiagonalSum = 0;
    let rlDiagonalSum = 0;
    for (let row = 0; row < 3; row++) {
      lrDiagonalSum += board[row][row];
      rlDiagonalSum += board[row][2 - row];
    }

    if (rlDiagonalSum === 3 || lrDiagonalSum === 3) return 1;
    if (rlDiagonalSum === -3 || lrDiagonalSum === -3) return -1;

    // If there is still empty spaces return no winnder
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const value = board[row][col];
        if (value === 0) {
          return 0;
        }
      }
    }

    return 2; // Draw
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameStatus}>{statusMessage}</div>
      <div className={styles.gameboard}>
        {gameState.map((row, y) => (
          <div key={y} className={styles.row}>
            {row.map((cell, x) => (
              <button
                key={`${x}-${y}`}
                onClick={() => setCell(x, y, currentPlayer)}
              >
                {cell === "X" ? "✖️" : cell === "O" ? "⭕" : ""}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button className={styles.resetBtn} onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}
