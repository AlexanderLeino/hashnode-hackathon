import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import humanCoding from '../images/human-coding.png'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SignUpForm from '../components/SignUpForm'


function InitialSignUpPage() {
    const steps = ['Who Are You?', 'Select Preferred Technologies', 'Account Creation Complete'];
    const [activeStep, setActiveStep] = useState(0);


    const handleNext = () => {
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };
 
   const handleBack = () => {
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };
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
        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          </Box>
        </>
    </Box>
        </Container>
        <SignUpForm />
 
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
            <Button variant='contained' onClick={handleBack} disabled={activeStep === 0}>Back</Button>
            <Button variant='contained' onClick={handleNext} disabled={activeStep === 3}>Next</Button>
        </Box>
    </Container>

</>
  )
}

export default InitialSignUpPage