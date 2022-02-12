import React from 'react'
import { useState } from "react";

import { useMutation } from '@apollo/client';
import { CREATE_GROUP } from '../utils/mutations';
import Auth from '../utils/auth';


function QMakeGroup(){
    const [groupName, setGroupName] = useState('');
    const [aboutGroup, setAboutGroup] = useState('');
    const thisUser = Auth.getProfile()
    const [createGroup] = useMutation(CREATE_GROUP)
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(groupName, aboutGroup)
        console.log(document.getElementById('html').checked)
        let techNeeded = {}
        for (let i = 0; i < 2; i++){
            if (i == 0){
                if (document.getElementById('html').checked){
                    techNeeded.tech = 'html'
                }
            }
            else{
                if(document.getElementById('css').checked){
                    techNeeded.tech = 'css'
                }
            }
        }

        const NewGroup = {
            groupName: groupName,
            techNeeded: [ "HTML"],
            aboutGroup: aboutGroup,
            category: 'frontEnd',
            adminId: thisUser.data._id,
        }
        

        console.log(NewGroup)
        try{
            const theGroup = await createGroup({
                variables: {
                    ...NewGroup
                }
            })
            console.log(theGroup)
        }
        catch(err){
            console.log(err)
        }
        
        //console.log(theGroup)
        

        

    }


    
    return(
        <div>
                <form>
                    {/* Group Name */}
                    <input placeholder='Group Name'
                    type='text'
                    id='groupName'
                    onChange={({target}) => setGroupName(target.value)}>
                    </input>
                    {/* About Group */}
                    <input placeholder='Tell us about your group'
                    type='text'
                    id='aboutGroup'
                    onChange={({target}) => setAboutGroup(target.value)}>
                    </input>
                    {/* types of Tech */}
                    <input type='checkbox'
                    id='html'>
                    </input>
                    <input type='checkbox'
                    id='css'>
                    </input>
                    


                    <button onClick={handleFormSubmit} height='200px' width='200px'>Submit</button>
                </form>
        </div>
    )
}

export default QMakeGroup