import React from 'react'
import './card.css'

export default function Card(props){
    return(
        <div className='card-container'>
            <div className = 'card-top-number-and-logo'>
    <div className='card-logo'>

   <div className='logo-container'> <svg xmlns="http://www.w3.org/2000/svg" width="16.667" height="15" viewBox="0 0 16.667 15">
  <path id="store" d="M13.75,15H2.917A2.086,2.086,0,0,1,.833,12.916V6.6a.742.742,0,0,0,.364.076c.074,0,.157,0,.231-.005l.068,0H1.25A1.249,1.249,0,0,1,0,5.417V4.744a1.244,1.244,0,0,1,.089-.465L1.7.262A.42.42,0,0,1,2.083,0h12.5a.414.414,0,0,1,.387.262l1.607,4.018a1.244,1.244,0,0,1,.089.465v.672A1.249,1.249,0,0,1,15.7,6.635a.321.321,0,0,0,.132-.038v6.32A2.086,2.086,0,0,1,13.75,15ZM4.583,8.333h2.5a1.252,1.252,0,0,1,1.25,1.25v4.583H13.75A1.252,1.252,0,0,0,15,12.916V6.673h.434l.062-.007-.033,0H13.333a1.242,1.242,0,0,1-.833-.319,1.244,1.244,0,0,1-.83.319h-2.5a1.245,1.245,0,0,1-.833-.319,1.242,1.242,0,0,1-.83.319H5a1.242,1.242,0,0,1-.833-.319,1.245,1.245,0,0,1-.831.319H1.644c.02,0,.023.005.023.007v6.242a1.252,1.252,0,0,0,1.25,1.25h.416V9.583A1.252,1.252,0,0,1,4.583,8.333Zm0,.833a.417.417,0,0,0-.416.417v4.583H7.5V9.583a.417.417,0,0,0-.417-.417Zm7.917-5a.417.417,0,0,1,.416.416v.833a.417.417,0,0,0,.417.417h2.083a.417.417,0,0,0,.416-.417V4.744a.422.422,0,0,0-.03-.155L14.3.833H2.367L.863,4.589a.422.422,0,0,0-.03.155v.672a.417.417,0,0,0,.417.417H3.333a.417.417,0,0,0,.417-.417V4.583a.417.417,0,0,1,.833,0v.833A.417.417,0,0,0,5,5.833H7.5a.417.417,0,0,0,.417-.417V4.583a.417.417,0,0,1,.833,0v.833a.417.417,0,0,0,.416.417h2.5a.417.417,0,0,0,.416-.417V4.583A.417.417,0,0,1,12.5,4.167ZM12.083,12.5H11.25A1.252,1.252,0,0,1,10,11.25V9.583a1.252,1.252,0,0,1,1.25-1.25h.833a1.252,1.252,0,0,1,1.25,1.25V11.25A1.252,1.252,0,0,1,12.083,12.5ZM11.25,9.166a.417.417,0,0,0-.417.417V11.25a.417.417,0,0,0,.417.417h.833a.417.417,0,0,0,.417-.417V9.583a.417.417,0,0,0-.417-.417Z" fill="#d3cbbd"/>
</svg>

</div>

        
      <span className='card-name'>{props.name}</span></div>
  <div className='total-eggs-baloon-container'> <div className='specific-total-eggs'>{props.total}25,333 </div> <span className='baloon'>-3.5%</span> </div>
            </div>
            <div className = 'egg-quantity'>
    <div className='full-tray'><span className='word'>Full tray(30in a unit)</span> <span className='digit'>{props.fulltray}</span></div>
    <div className='single-eggs'>Single eggs <span className='digit'>{props.singleEggs}</span></div>
    <div className='chatki-eggs'>Chatki eggs <span className='digit'>{props.chatkiEggs}</span></div>
            </div>

        </div>
    )
}