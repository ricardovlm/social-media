import React from 'react'
import './register.css'

const Register = () => {
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
                        <input type="text" name="" id="" className='loginInput' placeholder='Username' />
                        <input type="text" name="" id="" className='loginInput' placeholder='Email' />
                        <input type="text" name="" id="" className='loginInput' placeholder='Password' />
                        <input type="text" name="" id="" className='loginInput' placeholder='Password Again' />
                        <button className='loginButton'>Sign Up</button>
                        <button className='loginRegisterButton'>Log In into yout Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register