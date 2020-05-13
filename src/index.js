import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';
import './variables.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById( 'root' ) ;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// ReactDOM.render( <App/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
