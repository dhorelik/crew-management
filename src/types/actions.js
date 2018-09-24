export type UpdateStatusAction = {
    type: string,
    id: string,
    newStatus: string,
    oldStatus: string
}

export type Action = UpdateStatusAction
