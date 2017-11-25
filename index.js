import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


// main app
import Board from './containers/Board';
import reducer from './reducers/xoGameReducer.js';


const store = createStore(reducer)

render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('app')
)