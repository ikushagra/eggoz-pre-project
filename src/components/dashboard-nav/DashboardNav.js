import React from 'react'
import './dashboard-nav.css'
import Retailer from '../retailer/Retailer'

export default function DashboardNav(props){
    return(

        <div className='dashboard-nav'>
        <div className='page-title'> 
        <span onClick={() => {props.toggleMenu()}} className='hamburger'><svg id="_1._Icons_Line_add-note_Copy" data-name="1. Icons / Line /  add-note Copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="hamburger-menu" d="M17.5,11H.5a.5.5,0,1,1,0-1h17a.5.5,0,1,1,0,1Zm0-5H.5a.5.5,0,1,1,0-1h17a.5.5,0,1,1,0,1Zm0-5H.5a.5.5,0,1,1,0-1h17a.5.5,0,1,1,0,1Z" transform="translate(3 6)" fill="#d3cbbd"/>
</svg>
</span> Operations Dashboard - Stock Management</div>
        <div className='dashboard-notification-icons'>

        <span className='message'>
     <svg id="_1._Icons_Line_add-item-alt" data-name="1. Icons / Line /  add-item-alt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="comment" d="M9,18a8.93,8.93,0,0,1-3.7-.8L.582,17.99A.5.5,0,0,1,.5,18a.5.5,0,0,1-.455-.707l1.49-3.263A9,9,0,1,1,9,18ZM5.369,16.185a.506.506,0,0,1,.215.048A8,8,0,0,0,15.747,13.3a8,8,0,1,0-13.233.385.5.5,0,0,1,.05.5L1.346,16.849l3.942-.657A.512.512,0,0,1,5.369,16.185Z" transform="translate(3 3.003)" fill="#977a68"/>
</svg>
    </span>

    <span className='bell'>
    <svg id="_1._Icons_Line_add-item-alt_Copy" data-name="1. Icons / Line /  add-item-alt Copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="bell" d="M6.922,18a3,3,0,0,1-2.83-2H2.5A2.5,2.5,0,0,1,.217,12.485l.706-1.591V8a6.011,6.011,0,0,1,4-5.659V2a2,2,0,0,1,4,0v.341a6.014,6.014,0,0,1,4,5.659v2.894l.707,1.59A2.5,2.5,0,0,1,11.345,16H9.753A3.008,3.008,0,0,1,6.922,18ZM5.19,16a2,2,0,0,0,3.466,0ZM6.922,3a5.006,5.006,0,0,0-5,5v3l-.043.2-.75,1.688A1.5,1.5,0,0,0,2.5,15h8.845a1.5,1.5,0,0,0,1.371-2.111l-.75-1.687-.043-.2V8A5.006,5.006,0,0,0,6.922,3Zm0-1a6.074,6.074,0,0,1,1,.083V2a1,1,0,0,0-2,0v.083A6.091,6.091,0,0,1,6.923,2Z" transform="translate(5.077 3)" fill="#977a68"/>
</svg>
    </span>

    <span className='dp'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle id="Oval" cx="12" cy="12" r="12" fill="#d3cbbd"/>
</svg>

    </span>
        </div>
</div>
    )
}