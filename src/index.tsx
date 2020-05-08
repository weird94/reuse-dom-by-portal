import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pressScale/index';
import * as serviceWorker from './serviceWorker';
import './fragment';

const create = document.createElement;
Object.defineProperty(document, 'createElement', {
  // @ts-ignore
  value: function (...args) {
    console.log('createElement called', ...args);
    // @ts-ignore
    return create.apply(document, args);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var fragment = document.createElement('x-fragment');
fragment.appendChild(document.createElement('div'));

document.body.appendChild(fragment);
