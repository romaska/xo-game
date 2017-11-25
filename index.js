import React from 'react';
import { render } from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'



// main app
import Board from './containers/Board';
import reducer from './reducers/xoGameReducer.js';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('app')
)