import { Component } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import SubmissionSuccess from './SubmissionSuccess';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userEmail: '',
            userMessage: '',
            userSubmitted: false,
            formValidation: false
        }
    }

    componentDidMount(){
        this.setState({
            userName: '',
            userEmail: '',
            userMessage: '',
            userSubmitted: false,
            formValidation: false
        });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if(form.checkValidity() === false) {
            this.setState({ formValidation: true});
        } else {
            this.setState({ userSubmitted: false }, () => {
                this.setState({ userSubmitted: true });
            });
            this.setState({ formValidation: true });
        }
    }
    

    render() {

        if(this.state.userSubmitted)
        {
            return(
                <>
                    <SubmissionSuccess
                        userName={this.state.userName}
                        userEmail={this.state.userEmail}
                        userMessage={this.state.userMessage}
                    />
                </>
            )
        }

        return (
            <>
                <Container>
                    <Form noValidate validated={this.state.formValidation} onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="userNameForm">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter name" 
                            name="userName" 
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userEmailForm">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="userEmail" 
                            placeholder="Enter email" 
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">Please enter your e-mail.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="userMessage" 
                            value={this.state.userMessage}
                            onChange={this.handleInputChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form> 
                </Container>
            </>
        );
    }
}

export default Contact;