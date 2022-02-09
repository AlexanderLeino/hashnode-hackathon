import React from 'react'
import { useState } from "react";

import { useMutation } from '@apollo/client';
import { LOG_IN } from "../utils/mutations";
import Auth from '../utils/auth';


function Login (){
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    //const isInvalid = password === '' || emailAddress === '' || userName === '';

    const [LoginUser] = useMutation(LOG_IN);

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later
        
        const userData = {
            email: emailAddress,
            password: password,
        }

        try {
            const {
              data: {
                login: { token },
              },
            } = await LoginUser({
              variables: {
                ...userData,
              },
            });
      
            Auth.login(token);
          } catch (err) {
            console.log(err);
          }
    }

    return(
        <>
        
        <form onSubmit={handleFormSubmit}>
            <input
            placeholder='Email'
            type='email'
            id='email'
            value={emailAddress}
            onChange={({ target }) => setEmailAdress(target.value)}>
            </input>
            <input 
            placeholder='Password'
            type='password'
            id='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}>
            </input>
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login