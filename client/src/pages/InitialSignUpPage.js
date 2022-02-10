import React  from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import humanCoding from '../images/human-coding.png'
import Button from '@mui/material/Button'
import SignUpStepper from '../components/SignUpStepper'

function InitialSignUpPage() {
    // const [userName, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
  return (<>

    <Container>
        <h1 style={{textAlign: 'center'}}>Your Journey Starts Here!</h1>
    </Container>
   
    
    <Container >
    <Box mt={4}>
        <Grid container alignItems='center'>
            <Grid item xs={6}>
                <div style={{textAlign:'center', fontSize:'2.5rem'}}>Personalize Your Experience</div>

            <ul style={{textAlign: 'center', marginTop: '1rem', listStyle:'none', lineHeight:'2.25rem'}}>
                <li style={{textAlign: 'center', fontSize:'1.25rem', marginLeft: '28px'}}>Able To Easily Request to Join A Group</li>
                <li style={{textAlign: 'center', fontSize:'1.25rem'}}>Tailored Group Suggestions</li>
                <li style={{textAlign: 'center', fontSize:'1.25rem'}}>Start Building a Proof of Work with Us!</li>
            </ul>

            </Grid>
            <Grid item xs={6} maxWidth='fit-content'>
                <img style={{height: 'auto', maxWidth:'600px', padding:'0px'}} src={humanCoding} alt='A picture of a women sitting at her computer'></img>
            </Grid>
        </Grid>
    </Box>
    </Container >
    <Container maxWidth style={{background:'#393da9d9', paddingTop:'2rem', paddingBottom:'2rem'}}>
        
        <Container maxWidth='sm'>
            <SignUpStepper />
        </Container>

    <Container maxWidth='xs' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
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
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
            <Button variant='contained'>Next</Button>
            <Button variant='contained'>Next</Button>
        </Box>
    </Container>

</>
  )
}

export default InitialSignUpPage