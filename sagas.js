import { delay } from 'redux-saga';
import { call, put, take, takeEvery, all } from 'redux-saga/effects';

const delay2 = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  console.log('increm++');
  yield delay(500); // yield call(delay, 1000); // breaks the test to not even running
  yield put({ type: 'INCREMENT' });
}
function* tryGo() {
  console.log('try go!');
  yield put({ type: 'TRY_GO_RDX' });
}
function* letGo() {
  console.log('let go!');
  yield put({ type: 'LET_GO_RDX' });
}

function* watchIncrementAsync() {
  console.log('watch all - 0');

  console.log('watch all - Before ');
  yield take('LET_GO'); // nothing a go until Let is done (wrong: yield take('LET_GO', tryGo); )
  console.log('watch all - After ');

  yield call(tryGo);  // blocking ...only if tryGo is.

  console.log('watch all - 1');
  yield takeEvery('TRY_GO', letGo);
  console.log('watch all - 2');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  
  console.log('watch all - Before ');
  yield take('LET_GO'); // nothing a go until Let is done (wrong: yield take('LET_GO', tryGo); )
  console.log('watch all - After ');

  console.log('watch all - Z');
}

// notice how we now only export the rootSaga single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
