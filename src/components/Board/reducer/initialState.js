import data from 'data.json'

// assume no fetch is required since there is no way to save the state on remote server anyway
// get data from the file
const originalData = data.results.reduce((obj, item) => {
    obj[item.id.value] = item
    return obj
}, {})
const origialKeys = Object.keys(originalData)


export default {
    byId: originalData,
    applied: origialKeys,
    interviewing: [],
    hired: []
}
