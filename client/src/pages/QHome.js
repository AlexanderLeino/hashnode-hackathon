import React from 'react'
import { useState } from "react";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';


function QHome (){
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    //const isInvalid = password === '' || emailAddress === '' || userName === '';

    const [createUser] = useMutation(CREATE_USER);

    const handleLogOut = () => {
        Auth.logout();
      };

    const editProfile = () => {
        window.location = '/edit'
    }

    console.log(Auth.loggedIn())
    const handleFormSubmit = async(e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later
        
        const userData = {
            userName: userName,
            email: emailAddress,
            password: password,
        }

        try {

            console.log(userData)
            const { data: { createUser: { token } } } = await createUser({
                variables: {
                    ...userData
                }
            })
            Auth.login(token)

        }
        catch (err) {
            console.log(err)
        }
    }

    return(
        <>
        {!Auth.loggedIn() ? (
            
            <form onSubmit={handleFormSubmit}>
            <input placeholder='username'
            type='text'
            id='username'
            onChange={({target}) => setUserName(target.value)}></input>
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
            <button type="submit">SignUp</button>
            <p>or</p>
            
        </form>
           
            
            
        ) : (
            <div>
                <button onClick={handleLogOut}>Logout</button>
                <button onClick={editProfile}>editProfile</button>
            </div>
            
        )}
        
        </>
    )
}

export default QHome