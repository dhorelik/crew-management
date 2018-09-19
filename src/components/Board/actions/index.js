import { UPDATE_STATUS } from '../constants/actionTypes'


export const updateStatus = (id, newStatus, oldStatus) => ({
    type: UPDATE_STATUS,
    id,
    newStatus,
    oldStatus
})
