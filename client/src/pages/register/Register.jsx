import React, { useRef } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handledClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity('Password don´t match')
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            console.log(user);
            try {
                await axios.post('/auth/register', user)
                navigate('/login')
            } catch (error) {
                console.log(error);
            }

        }
    }
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
                        <form onSubmit={handledClick}>
                            <input type="text"
                                name="name"
                                id=""
                                className='loginInput'
                                placeholder='Username'
                                required
                                ref={username} />
                            <input type="email"
                                name="email"
                                id=""
                                className='loginInput'
                                placeholder='Email'
                                required
                                ref={email} />
                            <input type="password"
                                name="password"
                                id=""
                                className='loginInput'
                                placeholder='Password'
                                required
                                ref={password} />
                            <input type="password"
                                name="passwordAgain"
                                id=""
                                className='loginInput'
                                placeholder='Password Again'
                                required
                                ref={passwordAgain} />
                            <button className='loginButton'
                                type="submit">Sign Up</button>
                            <button className='loginRegisterButton'>Log In into yout Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register