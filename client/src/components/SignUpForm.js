import React from 'react'
import Container from '@mui/material/Container'

function SignUpForm() {
  return (<>
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Email:</label>
            <input type='email' style={{alignText:'left', marginBottom:'1rem', height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Username:</label>
            <input type='text' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Password:</label>
            <input type='password' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Confirm Password</label>
            <input type='password' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
    </form>
    </Container>
  </>
  )
}

export default SignUpForm