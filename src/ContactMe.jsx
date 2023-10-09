import React, {useEffect, useState} from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import {StyledContactTitle, StyledForm, StyledButton, StyledLoadingForm} from './ContactMe.styled';
import MoodIcon from '@mui/icons-material/Mood';
import { TextField, Stack, Skeleton } from '@mui/material';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY), []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onClickSend = async (e) => {
        e.preventDefault();
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;

        console.log(serviceId, templateId)
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
            from_name: `${firstName} ${lastName}`,
            message: message
          });

          setFirstName('');
          setLastName('');
          setMessage('');
          setLoading(false);
          
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
    };

    return (
        <div style={{alignItems: 'center', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '50%'}}>
            <StyledContactTitle>Let's get in touch <MoodIcon/> </StyledContactTitle>
            {
                loading ?
                <StyledLoadingForm>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </StyledLoadingForm> :
                <StyledForm>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            fullWidth
                            required
                        />
                    </Stack>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <br/>
                    <StyledButton id="contact-button" variant="outlined" type="submit" onClick={onClickSend}>Send Email</StyledButton>
                </StyledForm>
            }
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '8%'}}>
                <LinkedInIcon onClick={event =>  window.open('https://www.linkedin.com/in/hiruf/', "_blank")} style={{fontSize: '100px', color: 'grey', stroke: 'white'}}/>
                <FacebookIcon onClick={event =>  window.open('https://www.facebook.com/hiru.sepalika', "_blank")} style={{fontSize: '100px', color: 'grey', stroke: 'white'}}/>
            </div>
        </div>
    )
}

export default ContactMe;