import * as localStorageKeys from 'constants/localStorageKeys'
import { UPDATE_STATUS } from 'components/Board/constants/actionTypes'
import type { Action } from 'types/actions'
import type { CandidateState } from 'types/candidate'


type GetState = () => {
    board: CandidateState
}


export default ({ getState }: { +getState: GetState }) => (next: (Action) => Action) => (action: Action) => {
    const result = next(action)
    const nextState = getState()

    switch (action.type) {
        case UPDATE_STATUS:
            localStorage.setItem(
                localStorageKeys.DATA,
                JSON.stringify(nextState.board)
            )

            break

        default:
            break
    }

    return result
}
