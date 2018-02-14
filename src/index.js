import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

const appjs = () => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

ReactDOM.render(appjs(), document.getElementById('root'));
registerServiceWorker();
