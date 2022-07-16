import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootreducer, composeEnchancer(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();