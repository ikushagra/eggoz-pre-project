import React,{useState} from 'react'
import './login.css'
import logo from '../navbar/assets/logo.png'
import bgimage from '../login/bgimage.png'
import mascot from '../navbar/assets/mascot.png'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitLogin = (e) =>{
        e.preventDefault()
        if(email !== '' && password !== ''){
            alert("your email is " + email)
            alert("your password is "+password)
        }

    }

    const emailValue = (e) =>{
        setEmail(e.target.value)
    }

    const passwordValue = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div className='login-container'>
            <div className='login-logo'>
            <img style={{padding: "10px"}} src={mascot}/>
                <img src={logo}/>
            </div>
            <form className='login-box-container' onSubmit={submitLogin}>
                <div className='sign-in-heading'><span className='heading-signin'>Sign in</span></div>
                <div className='login-input-fields'>
                    <label className='label-login'>Email Address</label>
                    <input className='input-login' value={email} onChange={(e) => {emailValue(e)}} type='email'/>
                    <label className='label-login'>Password</label>
                    <input className='input-login' onChange={(e) => {passwordValue(e)}} type='password'/>
                </div>
                
                <div className='login-buttons'>
                <span className='forgot-pass'>Forgot Password</span>
                <button className='login-button' type='submit' value='Submit'>Log in</button>
                </div>
                

            </form>
        </div>
    )
}