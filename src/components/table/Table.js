import React from 'react'
import './table.css'

export default function Table(){
    return(
        <div className='table-container'>
            <div className="table-container-heading">
                <span className='stocks'>Stocks</span>
            <div className='heading-divison'><span className='page-no'>Page</span> <span className='item-no'>Items</span></div>
            </div> 
            <table className='table'>
                <tr>
                    <th>B. ID</th>
                    <th>Date & Time</th>
                    <th>Products</th>
                    <th>Source Farm</th>
                    <th>Qty</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>
                <tr>
                    <td>01</td>
                    <td>12 Jan 2021, 03:12 PM</td>
                    <td>White Eggs & Brown Eggs</td>
                    <td>XYZ Farm</td>
                    <td>9000</td>
                    <td>On the Way</td>
                    <td>...</td>
                </tr>
            </table>
        </div>
    )
}