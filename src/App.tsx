import React, { useState } from "react";
import "./App.css";

const status = "Next player: X";

type SquareState = "O" | "X" | "";

type SquareProps = {
  value: number;
  // value: SquareState;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => console.log("click")}>
      {props.value}
    </button>
  );
};

const renderSquare = (i: number) => {
  // return <Square value="" onClick={() => onclick} />;
  return <Square value={i} onClick={() => onclick} />;
};

const Board = () => {
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function App() {
  const [squares, setSquares] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
