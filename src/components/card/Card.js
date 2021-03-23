import React from 'react'
import './card.css'

export default function Card(props){
    return(
        <div className='card-container'>
            <div className = 'card-top-number-and-logo'>
    <div className='card-logo'>Logo{props.name}</div>
    <div className='cart-digits'>{props.total}</div>
            </div>
            <div className = 'egg-quantity'>
    <div className='full-tray'><span className='word'>Full tray(30in a unit)</span> <span className='digit'>{props.fulltray}</span></div>
    <div className='single-eggs'>Single eggs <span className='digit'>{props.singleEggs}</span></div>
    <div className='chatki-eggs'>Chatki eggs <span className='digit'>{props.chatkiEggs}</span></div>
            </div>

        </div>
    )
}