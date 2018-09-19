import React from 'react'
import logo from './img/logo.png'
import './style.css'


const AppHeader = () => (
    <header className='app-header'>
        <img src={logo} className='app-header__logo' alt='logo' />
        <h1 className='app-header__title'>OpenOceanStudio: Crew Applications</h1>
    </header>
)

export default AppHeader
