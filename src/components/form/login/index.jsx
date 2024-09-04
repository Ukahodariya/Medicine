import React from 'react'
import './login.scss'

export default function Login() {
    return (
        <div className='login'>
            <div className='container'>
                <section>
                    <h1>Login</h1>
                    <label>
                        <span>Username</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" />
                    </label>
                    <button onClick={() => navigate("/login")} >Login</button>
                    <p>Don't have an account? <a href="./signup">Signup</a></p>
                </section>
            </div>
        </div>
  )
}
