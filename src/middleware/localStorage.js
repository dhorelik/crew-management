import * as localStorageKeys from 'constants/localStorageKeys'
import { UPDATE_STATUS } from 'components/Board/constants/actionTypes'


export default ({ getState }) => next => (action) => {
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
