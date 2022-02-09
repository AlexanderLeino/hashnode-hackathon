import { useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../utils/mutations'
import React from 'react'
import Auth from "../utils/auth";
const EditProfile = () => {

    let userData = Auth.getProfile()
    const [user, setUser] = useState(userData.data)
    const [editingFirstName, setEditingFirstName] = useState(false)
    // const [editingLastName, setEditingLastName] = useState(false)
    // const [editingEmail, setEditingEmail] = useState(false)
    // const [editingAddress, setEditingAddress] = useState(false)
    const [updateUser] = useMutation(UPDATE_USER)

    

    console.log(userData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user.firstName, user._id, user.email, user.userName)
        const {data: updatedUser} = await updateUser({
            variables: {
                user: {
                    _id: user._id,
                    email: user.email,
                    userName: user.userName,
                    firstName: user.firstName
                }
            }
        })
        console.log(updatedUser)
        userData = updatedUser
    }

    return(
        <>
            {userData ? (

                <div>
                    {editingFirstName ? (
                        <div>
                            <form>
                                <input onChange={({target}) => setUser({...user, firstName: target.value})}></input>
                                <button type='submit' id='first-name' onClick={(e) => {
                                    setEditingFirstName(false)
                                    handleSubmit(e)
                                }}>submit</button>
                            </form>
                        </div>
                    ) : (
                        <button onClick={() => setEditingFirstName(true)}></button>
                    )}
                </div>
            ) : (

                <div>
                    <p>noData</p>
                </div>

            )}
        
        </>
    )
}


export default EditProfile