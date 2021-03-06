import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

// ...
import { helloSaga } from './sagas';
import Counter from './Counter';
import reducer from './reducers';
import rootSaga from './sagas';
import Dashboard from './modals/Dashboard';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onTryGo={() => action('TRY_GO')}
      onLetGo={() => action('LET_GO')}
      howDidItGo={store.getState()}
    />,

    // <Dashboard />,

    document.getElementById('root')
  );
}

render();
store.subscribe(render);
