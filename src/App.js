import './App.css';
import React,{ Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Operations from './components/operations/Operations'




export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      navbarContents:[{name: 'Dashboard', icon: './dash.png'},{name:'Favorites', icon:'./dash.png'}],
      appManagement: [{name: 'Fields', icon:''},{name: 'Markets', icon:''},{name: 'Categories', icon:''},{name: 'Products', icon:''},{name: 'Orders', icon:''},{name: 'Coupons', icon:''},{name: 'Users', icon:''},{name: 'Shippers', icon:''},{name: 'Faqs', icon:''}],
      settings: [{name: 'Media Library', icon:''},{name: 'Payments', icon:''},{name: 'Mobile App Settings', icon:''},{name: 'Settings', icon:''},],
      eggData:[{id: 0, name:'white eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 1, name:'brown eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 2, name:'nutri eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 3, name:'white eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0}],
      stockData:[{id: 0, dateAndTime: "12-jan-2020 12:11PM", products: "brown-eggs", sourceFarm: 'xyz', qty: 9000, received: false}]
    }
  }

  render(){
    const {navbarContents, appManagement, settings, eggData, stockData} = this.state
    return (

      <div className="app-container">

          <Navbar navbarContentsFromApp = {navbarContents} appManagementFromApp = {appManagement} settingsFromApp={settings}/>
        <div className='wall-container'>
          <Operations eggDataFromApp = {eggData} stockDataFromApp = {stockData}/>
        </div>
  
      </div>
    );

  }

}

