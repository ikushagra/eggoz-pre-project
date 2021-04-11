import React from 'react'
import './navbar.css'
import logo from './assets/logo.png'
import categories from './assets/icons/categories.png'
import favourite from './assets/icons/favourite.png'
import fields from './assets/icons/fields.png'
import markets from './assets/icons/markets.png'
import coupons from './assets/icons/coupons.png'
import faqs from './assets/icons/faqs.png'
import medias from './assets/icons/medias.png'
import mobile from './assets/icons/mobile.png'
import orders from './assets/icons/orders.png'
import payments from './assets/icons/payments.png'
import products from './assets/icons/products.png'
import settings from './assets/icons/settings.png'
import shippers from './assets/icons/shippers.png'
import users from './assets/icons/users.png'

export default function Navbar(props){

    let toggled = props.toggled
    let navtype = 'navbar-1'
    let menuName = 'menu-name-1'
    let eggozLogo = 'logo'
    let menuCategory = 'menu-category-1'

    if(toggled === true){
        navtype = 'navbar-1'
        menuName = 'menu-name-1'
        eggozLogo = 'logo'
        menuCategory = 'menu-category-1'
    }else{
        navtype = 'navbar-2'
        menuName = 'menu-name-2'
        eggozLogo = 'logo-2'
        menuCategory = 'menu-category-2'
    }
    return(
        <div className={navtype}>
            <div className={eggozLogo}><img className='icon' src={logo} alt='EGGOZ logo'/></div>
            <div className='menu-level-one'>
                <div className='icon-and-name-container'>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={categories}/> <span className={menuName}>Dashboard</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={favourite}/> <span className={menuName}>Favourite</span>
                    </div>

                </div>
            </div>

            <div className='menu-level-two'>
                <div className={menuCategory}>App Mangement</div>

                <div className='icon-and-name-container'>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={fields}/> <span className={menuName}>Fields</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={markets}/> <span className={menuName}>Markets</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={categories}/> <span className={menuName}>Categories</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={products}/> <span className={menuName}>Products</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={orders}/> <span className={menuName}>Orders</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={coupons}/> <span className={menuName}>Coupons</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={users}/> <span className={menuName}>Users</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={shippers}/> <span className={menuName}>Shippers</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={faqs}/> <span className={menuName}>Faqs</span>
                    </div>

                </div>

            </div>

            <div className='menu-level-three'>
                <div className={menuCategory}>Settings</div>

                <div className='icon-and-name-container'>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={medias}/> <span className={menuName}>Medias Library</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={payments}/> <span className={menuName}>Payments</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={mobile}/> <span className={menuName}>Mobile App Settings</span>
                    </div>
                    <div className='icon-name-box'>
                        <img className='image-icon' src={settings}/> <span className={menuName}>Settings</span>
                    </div>

                </div>
         
            </div>
            

        </div>

    )
}















