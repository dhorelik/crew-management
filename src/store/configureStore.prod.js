import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import localStorage from 'middleware/localStorage'
import rootReducer from 'reducer'
import initialState from 'initialState'


export const history = createHistory()

export default () => createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        routerMiddleware(history),
        localStorage
    )
)
