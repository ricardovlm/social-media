import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loinDesc">
                        Connect with friends and
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" name="" id="" className='loginInput' placeholder='Email' />
                        <input type="text" name="" id="" className='loginInput' placeholder='Password' />
                        <button className='loginButton'>Log In</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className='loginRegisterButton'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login