import { useState } from "react";
import Tictac from "./Tictac";
import "./Game.css";

const Game: React.FC = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const curentSquare = history[history.length - 1];

  const handlePlay = (nextSquare: Array<string | null>) => {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
    console.log(history);
  };

  const JumpTo = (step: number) => {
    setHistory(history.slice(0, step + 1));
    setXIsNext(step % 2 === 0);
  };

  const move = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => JumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Tictac
            xIsNext={xIsNext}
            squares={curentSquare} // Update the type of `curentSquare` to `(string | null)[]`
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{move}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
