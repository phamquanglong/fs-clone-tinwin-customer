import {all, fork, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import { GET_USER } from './constants';

function* fetchData() {
  takeLatest(GET_USER, function* (action) {
    try {
      //   const res = yield call(UserServices.getUser);
    } catch (error) {}
  });
}

export default function* UserSaga() {
  yield all([fork(fetchData)]);
}
