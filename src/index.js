import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App/>, rootEl)
}

if(module.hot){
    module.hot.accept('./App', () => {
        setTimeout(render)
    })
}
render();

//ReactDOM.render(<App />, );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
