export default ({ getState }) => next => (action) => {
    const prevState = getState()
    const result = next(action)

    switch (action.type) {

        // TODO update storage on filter change

        default:
            break
    }

    return result
}
