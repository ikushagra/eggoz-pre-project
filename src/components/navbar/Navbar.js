import React from 'react'
import './navbar.css'
import logo from './assets/logo.png'
import dash from './assets/icons/dash.png'

export default function Navbar(props){
    let navbarContentsChild = props.navbarContentsFromApp
    let appManagementChild = props.appManagementFromApp
    let settingsChild = props.settingsFromApp
    return(
        <div className='navbar'>
            <div className='logo'><img className='icon' src={logo} alt='EGGOZ logo'/></div>
            <div className='menu-level-one'>
            {navbarContentsChild.map((menu,index) => 
            <ul className='list-1'>
                <li key={index} > <img src={dash}/> {menu.name}</li>
            </ul>
            )}
            </div>

            <div className='menu-level-two'>
                <div>App Mangement</div>
            {appManagementChild.map((menu,index) => 
            <ul className='list-2'>
                <li key={index} > <img src={dash}/>{menu.name}</li>
            </ul>
            )}
            </div>

            <div className='menu-level-three'>
                <div>Settings</div>
            {settingsChild.map((menu,index) => 
            <ul className='list-3'>
                <li key={index} > <img src={dash}/>{menu.name}</li>
            </ul>
            )}
            </div>
            

        </div>

    )
}