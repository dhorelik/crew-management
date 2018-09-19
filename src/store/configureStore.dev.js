import { createStore, applyMiddleware, compose } from 'redux'
import immutableState from 'redux-immutable-state-invariant'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import localStorage from 'middleware/localStorage'
import rootReducer from 'reducer'
import initialState from 'initialState'


export const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(
            immutableState(),
            routerMiddleware(history),
            localStorage
        )
    )
)
