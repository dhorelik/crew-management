import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore, { history } from 'store/configureStore'
import App from 'components/App'
import 'styles/base.css'


const root = document.getElementById('root')

if (root !== null) {
    ReactDOM.render(
        (
            <Provider store={configureStore()}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </Provider>
        ),
        root
    )
}
