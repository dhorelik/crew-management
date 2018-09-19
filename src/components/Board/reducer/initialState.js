import * as localStorageKeys from 'constants/localStorageKeys'
import data from 'data.json'


const savedData = JSON.parse(localStorage.getItem(localStorageKeys.DATA))
let originalData = {}
let originalKeys = []

if (!savedData) {
    // assume no fetch is required since there is no way to save the state on remote server anyway
    // get data from the file on first run

    originalData = data.results.reduce((obj, item) => {
        obj[item.id.value] = item
        return obj
    }, {})
    originalKeys = Object.keys(originalData)
}

export default savedData || {
    byId: originalData,
    applied: originalKeys,
    interviewing: [],
    hired: []
}
