import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore, { history } from 'store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from 'components/App'
import 'styles/base.css'


ReactDOM.render(
    (
        <Provider store={configureStore()}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('root')
)

registerServiceWorker()
