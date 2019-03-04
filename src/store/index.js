import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/reactotron';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAppropriateStore = process.env.NODE_ENV === 'development'
  ? createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer(),
    ),
  )
  : createStore(reducers, applyMiddleware(...middlewares));

const store = createAppropriateStore;

sagaMiddleware.run(sagas);

export default store;
