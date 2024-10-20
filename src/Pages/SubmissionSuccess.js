import { Alert, Container } from 'react-bootstrap';
import { useState } from 'react';

const SubmissionSuccess = (props) => {
    
    const [userName] = useState(props.userName);
    const [userEmail] = useState(props.userEmail);
    const [userMessage] = useState(props.userMessage);


    
    return(
    <Container>
        <Alert variant="success" style={{marginTop: "165px"}}>
            <Alert.Heading>Thanks you, {userName}! Your message has been sent!</Alert.Heading>
            <p>
                Thank you for the feedback! I really hope you enjoy my website. As I really
                poured a lot of effort from this in a really short time. Here are the information you have
                sent to me.
            </p>
            <hr />
            <p>
                Name: {userName} <br />
                E-Mail: {userEmail} <br />
                Message: {userMessage}
            </p>
        </Alert>
    </Container>
    );
}

export default SubmissionSuccess;