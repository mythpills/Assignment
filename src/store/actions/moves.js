export const SELECT_CELL = "SELECT_CELL";
export const UPDATE_WINNER = "UPDATE_WINNER";
export const GET_WINNER = "GET_WINNER";

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col,
  };
}

export function updateWinner(winner, board) {
  return {
    type: UPDATE_WINNER,
    winner,
    board,
  };
}
