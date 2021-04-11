import React from 'react'
import { Bar } from 'react-chartjs-2';



import './map-card.css'


export default function MapCard(props){
    return(
        <div className='map-card-container'>
            <div className = 'map-card-top-number-and-logo'>
    <div className='map-card-logo'>

   <div className='map-logo-container'> <svg id="_1._Icons_Line_add-item-alt" data-name="1. Icons / Line /  add-item-alt" xmlns="http://www.w3.org/2000/svg" width="11.721" height="12.642" viewBox="0 0 11.721 12.642">
  <path id="shopping-bag-alt" d="M7.574,9.482H1.221A1.273,1.273,0,0,1,0,8.165V1.053A1.018,1.018,0,0,1,.977,0H7.814a1.008,1.008,0,0,1,.972,1.007l0,.014a.1.1,0,0,1,.005.029V8.165A1.273,1.273,0,0,1,7.574,9.482ZM.488,1.961v6.2a.764.764,0,0,0,.733.79H7.574a.764.764,0,0,0,.733-.79V1.959a.92.92,0,0,1-.492.148H.977A.908.908,0,0,1,.488,1.961ZM.977.527a.509.509,0,0,0-.488.527.509.509,0,0,0,.488.527H7.814A.509.509,0,0,0,8.3,1.053.509.509,0,0,0,7.814.527ZM4.4,5.268A2.037,2.037,0,0,1,2.442,3.161H2.2a.264.264,0,0,1,0-.527h.977a.264.264,0,0,1,0,.527H2.931a1.636,1.636,0,0,0,.43,1.117A1.4,1.4,0,0,0,4.4,4.741a1.528,1.528,0,0,0,1.465-1.58H5.617a.264.264,0,0,1,0-.527h.977a.264.264,0,0,1,0,.527H6.349A2.037,2.037,0,0,1,4.4,5.268Z" transform="translate(1.465 1.58)" fill="#d3cbbd"/>
</svg>


</div>

        
      <span className='map-card-name'>{props.name}TOTAL ORDERS</span></div>
    <div className='map-specific-total-eggs'>{props.total}25,333 </div>
            </div>
            <div className = 'map-egg-quantity'>

            <Bar
data ={{
  labels:["1/2","2/2","3/2","4/2","5/2","6/2","7/2","8/2","9/2","10/2"],
  datasets:[{
    label:'test',
    data:[11,22,33,44,55,66,77,88,92,100],
    backgroundColor: "#FFD5A4",
    borderColor:'blue',
    borderWidth:0,
    
  },{
    label:'b',
    data:[11,22,33,44,55,66,77,88,92,100],
    backgroundColor:"#94CBFF",
    borderColor:'black',
    borderWidth:0,
    borderRadius:3,

  }]
}
}
height={150}
width={200}
options={{

}}
/>
            </div>

        </div>
    )
}