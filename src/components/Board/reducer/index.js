import initialState from './initialState'
import { INITIALIZE_BOARD } from '../constants/actionTypes'


export default (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_BOARD:
            return {
                ...state
            }

        default:
            return state
    }
}
