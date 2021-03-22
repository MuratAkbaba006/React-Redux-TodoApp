import React from 'react'
import {login} from '../actions/auth'

const LoginPage=()=>(
    <div className="container my-3">
        
        <h1>Giriş yöntemini seçiniz</h1>
       
        <button className="btn btn-primary" onClick={login} >Login with Google</button>
        
    </div>
)

export default LoginPage