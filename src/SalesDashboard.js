import React from 'react'
import './salesDashboard.css'
import Navbar from './components/navbar/Navbar'
import DashboardNav from './components/dashboard-nav/DashboardNav'
import Retailer from './components/retailer/Retailer'

export default function salesDashboard(){

    const navbarContents =[{name: 'Dashboard', icon: './dash.png'},{name:'Favorites', icon:'./dash.png'}]
    const appManagement = [{name: 'Fields', icon:''},{name: 'Markets', icon:''},{name: 'Categories', icon:''},{name: 'Products', icon:''},{name: 'Orders', icon:''},{name: 'Coupons', icon:''},{name: 'Users', icon:''},{name: 'Shippers', icon:''},{name: 'Faqs', icon:''}]
    const settings = [{name: 'Media Library', icon:''},{name: 'Payments', icon:''},{name: 'Mobile App Settings', icon:''},{name: 'Settings', icon:''}]
    return(
        <div className='sales-container'>
            <Navbar navbarContentsFromApp = {navbarContents} appManagementFromApp = {appManagement} settingsFromApp={settings}/>
            <div className='sales-wall-container'>
            <DashboardNav/>
            <Retailer/>
            </div>
        </div>
    )
}