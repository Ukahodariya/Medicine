import React, { useState } from 'react'
import './signup.scss'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    return (
        <div className='signup'>
            <div className='container'>
                <section>
                    <h1>Signup</h1>
                    <label>
                        <span>Username</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Email</span>      
                        <input type="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" />
                    </label>
                    <button onClick={() => navigate("/login")} >Signup</button>
                    <p>Already have an account? <a href="./login">Login</a></p>
                </section>
            </div>
        </div>
    )
}
