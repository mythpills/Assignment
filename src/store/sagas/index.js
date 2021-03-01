import { all, takeLatest } from 'redux-saga/effects'
import {SELECT_CELL} from '../actions/moves'
import { handleUpdateWinner } from './handler';


export default function* rootSaga() {
  // yield all([]);
  yield takeLatest(SELECT_CELL, handleUpdateWinner)
}

