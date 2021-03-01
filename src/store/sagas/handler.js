import {put, select } from "redux-saga/effects";
import * as selectors from "./selectors";
import { updateWinner } from "../actions/moves";

function calculateWinner(board) {
  const squares = board[0].concat(board[1], board[2]);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function* handleUpdateWinner(action) {
  const board = yield select(selectors.board);
  const winner = calculateWinner(board);
  if (winner) yield put(updateWinner(winner));
}
