import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import * as reducers from './reducers'

function compose(rs) {
    return function (state = {}, action) {
        return Object.keys(rs).map(_ => rs[_]).reduce((a, b) => b(a, action), state);
    }
}

export default applyMiddleware(promiseMiddleware)
    (createStore)
    (compose(reducers), window.devToolsExtension && window.devToolsExtension());