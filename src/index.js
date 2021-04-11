import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/Login'
import Signup from './Signup'
import SalesDashboard from './SalesDashboard'

ReactDOM.render(
  <React.StrictMode>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <SalesDashboard/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
