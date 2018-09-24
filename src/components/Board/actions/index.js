import type { CandidateStatusValues } from 'types/candidate'
import type { UpdateStatusAction } from 'types/actions'
import { UPDATE_STATUS } from '../constants/actionTypes'


export const updateStatus = (id: string, newStatus: CandidateStatusValues, oldStatus: CandidateStatusValues): UpdateStatusAction => ({
    type: UPDATE_STATUS,
    id,
    newStatus,
    oldStatus
})
