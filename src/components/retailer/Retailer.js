import React from 'react'
import './retailer.css'

export default function Retailer(){
    return(
        <>
        
        <div className='retailer-container'>
        <div className='onboard-new-retailer-heading'><span className='onboard-title'>Onboard new retailer</span></div>
        <div className='details-inner-container'>
            <div className='primary-details'>
            <label className = 'label'>Name of Shop</label>
                    <input className='input'/>
                    <label className = 'label'>Short Name</label>
                    <input className='input'/>
                    <label className = 'label'>Email Address</label>
                    <input className='input' type='email'/>
                    <label className = 'label'>Phone Number</label>
                    <input className='input'/>
                    <label className = 'label'>Address</label>
                    <input className='input'/>
                    <label className = 'label'>Building Name</label>
                    <input className='input'/>
                    <label className = 'label'>Street Name</label>
                    <input className='input'/>
                    <label className = 'label'>Landmark</label>
                    <input className='input'/>
                    <div className='city-and-pin-block'>
                        <div className='city-block'>
                        <label className = 'label'>City</label>
                    <input className='input-city'/>
                        </div>

                        <div className='pin-block'>
                        <label className = 'label'>Pincode</label>
                    <input className='input-pincode'/>
                        </div>


                    </div>
                    <div className='cluster'>
                    <label className='label'>Cluster</label>
                    <select className='input'>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                    </select>
                    </div>
            </div>


            <div className='secondary-details'>
            <label className='label'>Category</label>
                    <select className='input'>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                    </select>
            <label className='label'>Cluster</label>
                <select className='input'>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                </select>
                <label className='label'>Cluster</label>
                <select className='input'>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                </select>
                <label className='label'>Cluster</label>
                <select className='input'>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                </select>
            </div>
        </div>
        <div className='shop-owner-details'>
                <div className='new-shop-owner-name-container'>
                    <label className='label'>Name of Shop Owner</label>
                    <input className='input'/>
                </div>
                <div className='new-shop-owner-number-and-email-container'>
                    <div className='contact-number'>
                <label className='label'>Contact Number</label>
                <input className='input'/>
                </div>
                <div className='email'>
                <label className='label'>Email Id</label>
                <input className='input'/>
                </div>
                </div>

            </div>
            <div className='new-owner'>
                <div className='another-owner-button'>Add another Owner +</div>
                <div className='onboard-or-not'>
                <div className='cancel'>Cancel</div><div className='onboard'>Onboard</div>
                </div>
            </div> 
            {/* <div className='retailer-heading'>onboard retailer</div>
            <div className='shop-details-container'>
                <div className='primary-details'>
                    <label className = 'label'>Name of Shop</label>
                    <input className='input'/>
                    <label className = 'label'>Short Name</label>
                    <input className='input'/>
                    <label className = 'label'>Email Address</label>
                    <input className='input' type='email'/>
                    <label className = 'label'>Phone Number</label>
                    <input className='input'/>
                    <label className = 'label'>Address</label>
                    <input className='input'/>
                    <label className = 'label'>Building Name</label>
                    <input className='input'/>
                    <label className = 'label'>Street Name</label>
                    <input className='input'/>
                    <label className = 'label'>Landmark</label>
                    <input className='input'/>
                    <div className='city-and-pin-block'>
                    <label className = 'label'>City</label>
                    <input className='input-city'/>
                    <label className = 'label'>Pincode</label>
                    <input className='input-pincode'/>
                    </div>
                    <label className = 'label'>Cluster</label>
                    <input className='input'/>
                </div>
                <div className='secondary-details'>
                    <label>Category</label>
                    <select>
                        <option value='light theme'>Light theme</option>
                        <option value='Dark theme'>Dark theme</option>
                    </select>
                </div>
            </div>
            <div className='shop-owner-details'>
                <div className='new-shop-owner-name-container'>
                    <label>Name of Shop Owner</label>
                    <input/>
                </div>
                <div className='new-shop-owner-number-and-email-container'>
                <label className='label'>Contact Number</label>
                <input className='input'/>
                <label className='label'>Email Id</label>
                <input className='input'/>
                </div>
            </div>
            <div className='new-owner'>
                <div className='another-owner-button'>Add another Owner +</div>
                <div className='onboard-or-not'>
                <div className='cancel'>Cancel</div><div className='onboard'>Onboard</div>
                </div>
            </div> */}

        </div>
        </>
    )
}