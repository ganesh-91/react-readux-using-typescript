import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from "./appRouter";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
