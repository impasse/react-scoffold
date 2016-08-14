import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './redux/store'
import AppContainer from './components/AppContainer'

import './index.scss'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path={'/'} component={AppContainer}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);