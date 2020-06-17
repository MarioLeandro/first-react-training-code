import React from 'react';
import './style.css';
import {FiUser} from 'react-icons/fi'
import {FiKey} from 'react-icons/fi'
import {FiLogIn} from 'react-icons/fi'

const BodyRight = () => (

    <div id="div-right">
        <div id="login">
            <div id="form">
                <h1>Login</h1>
                <br/>
                <div>
                    <FiUser className="icon" color='#86ddd9' size='1.6rem'/>
                    <input type="text" id="name" name="name" placeholder="Username"></input>
                </div>
                <br/>
                <div>
                    <FiKey className="icon" color='#86ddd9' size='1.6rem'/>
                    <input type="text" id="pass" name="pass" placeholder="Password"></input>
                </div>
                <br/>
                <br/>
                <button className="btn"><FiLogIn color='white' size='2rem'/></button>
                <br/>
                <br/>
                <h3>I forgot my username</h3>
                <h3>I forgot my password</h3>
                <h3>I haven't an account</h3>
            </div>
        </div>  
    </div>

);

export default BodyRight;