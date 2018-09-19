import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import board from 'components/Board/reducer'


export default combineReducers({
    router: routerReducer,
    board
})
