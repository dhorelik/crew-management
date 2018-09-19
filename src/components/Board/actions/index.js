import { INITIALIZE_BOARD, UPDATE_STATUS } from '../constants/actionTypes'


export const initializeBoard = () => ({
    type: INITIALIZE_BOARD
})

export const updateStatus = (id, newStatus, oldStatus) => ({
    type: UPDATE_STATUS,
    id,
    newStatus,
    oldStatus
})
