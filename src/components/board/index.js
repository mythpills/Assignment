import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCell } from "../../store/actions/moves";

const selectBoard = (state) => state.board;
const selectGame = (state) => state.game;

function Square(props) {
  return (
    <>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
}

export const Board = () => {
  const board = useSelector(selectBoard);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();
  
  const renderSquare = (indRow, indCol) => {
    return (
      <Square
        key={`${indRow}+${indCol}`}
        value={board[indRow][indCol]}
        onClick={() =>
          !game.winner && dispatch(selectCell(game.currentPlayer, indRow, indCol))
        }
      />
    );
  };

  return (
    <div>
      {board.map((rows, rowIndex) => {
        return (
          <div key={rowIndex} className="board-row">
            {rows.map((square, colIndex) => {
              return renderSquare(rowIndex, colIndex);
            })}
          </div>
        );
      })}

      {game.winner ? (
        <div>Player {game.winner} wins!</div>
      ) : (
        <div>Next Player {game.currentPlayer}</div>
      )}
    </div>
  );
};
