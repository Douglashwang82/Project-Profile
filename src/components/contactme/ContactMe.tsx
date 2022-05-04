import React from 'react';
import { 
    Container,
    ContactCard,
} from './ContactMeElements';

export const ContactMe: React.FC = () => {
    return ( <>
        <Container>
            <ContactCard>
            <h1>Contact Me</h1>
            <text>
                Contact me with job opportunity or just say hi!
            </text>
            <br/>
            <br/>

            <button>Send Message</button>
            </ContactCard>
        </Container>
    </>);
}