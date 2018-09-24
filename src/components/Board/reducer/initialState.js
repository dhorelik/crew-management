import * as localStorageKeys from 'constants/localStorageKeys'
import data from 'data.json'


const savedData: ?string = localStorage.getItem(localStorageKeys.DATA)
let state = {}

if (savedData) {
    state = JSON.parse(savedData)
} else {
    // assume no fetch is required since there is no way to save the state on remote server anyway
    // get data from the file on first run

    const originalData = data.results.reduce((obj, item) => {
        obj[item.id.value] = item
        return obj
    }, {})

    const originalKeys: Array<string> = Object.keys(originalData)

    state = {
        byId: originalData,
        applied: originalKeys,
        interviewing: [],
        hired: []
    }
}

export default state
