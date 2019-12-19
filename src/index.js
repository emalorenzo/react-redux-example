import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// libreria de almacenamiento y control de estados
import { createStore } from 'redux';

// libreria para conectar nuestra app con redux
import { Provider } from 'react-redux';

import reducers from './Reducers';

// store va a ser el que va a almacenar el estado de nuestra app
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
