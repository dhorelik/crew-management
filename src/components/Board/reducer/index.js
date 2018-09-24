import type { CandidateState } from 'types/candidate'
import initialState from './initialState'
import { UPDATE_STATUS } from '../constants/actionTypes'


type State = CandidateState


export default (state: State = initialState, action: Object): State => {
    switch (action.type) {
        case UPDATE_STATUS:
            // TODO shouldn't handle data transformation in reducer, move to action

            return {
                ...state,
                [action.oldStatus]: state[action.oldStatus].filter(item => item !== action.id),
                [action.newStatus]: state[action.newStatus].concat(action.id)
            }

        default:
            return state
    }
}
