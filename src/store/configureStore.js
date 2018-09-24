import configureStoreDev, { history as historyDev } from './configureStore.dev'
import configureStoreProd, { history as historyProd } from './configureStore.prod'


const isDev = process.env.NODE_ENV === 'development'

const exportedStore = isDev
    ? configureStoreDev
    : configureStoreProd

export const history = isDev ? historyDev : historyProd
export default exportedStore
