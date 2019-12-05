import { delay } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

const delay2 = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

// "So, if you guys wanna test the function, export it."
export function* incrementAsync() {
  yield delay(1000); //
  //   yield call(delay, 1000); // breaks the test to not even running
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
