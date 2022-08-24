import React from "react";
import "./App.css";
import { useState } from "react";

const status = "Next player: X";

const Square = (i: number) => {
  // const [value, setValue] = useState("");

  return (
    // <button className="square" onClick={() => setValue("X")}>
      {squares[i]}
    </button>
  );
};

const board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill("x"));
  // const [squares, setSquares] = useState([]);

  const Square = (i: number) => {
    const [value, setValue] = useState(squares[i]);

    const handleClick = (i: number) => {
      const squares = squares.slice();
      value = setValue("X");
    };

    return (
      <button className="square" onClick={() => setValue("X")}>
        {value}
      </button>
    );
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {Square(0)}
        {Square(1)}
        {Square(2)}
      </div>
      <div className="board-row">
        {Square(4)}
        {Square(5)}
        {Square(6)}
      </div>
      <div className="board-row">
        {Square(6)}
        {Square(7)}
        {Square(8)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="game">
      <div className="game-board">
        {/* <Board /> */}
        {Board()}
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
