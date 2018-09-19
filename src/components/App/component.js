import React from 'react'
import Routes from 'components/Routes'
import AppHeader from 'components/AppHeader'
import './style.css'


const App = () => (
    <div className='app'>
        <AppHeader />

        <main>
            <Routes />
        </main>
    </div>
)

export default App
