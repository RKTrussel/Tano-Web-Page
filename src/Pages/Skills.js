import { Container, Card, ListGroup } from 'react-bootstrap';

const Skills = () => {
    return(
        <>
            <Container>
                <Card className="border border-info" style={{marginTop: "165px"}}>
                    <Card.Header className="fs-2 text-center ">My Skills</Card.Header>
                    <Card.Body className="fs-5">
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>
                                    Programming Languages I am efficient:
                                    <ul> 
                                        <li>Java</li>
                                        <li>HTML</li>
                                        <li>PHP</li>
                                        <li>Javascript</li>
                                    </ul>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Concepts I am efficient with:
                                    <ul>
                                        <li>Object-Oriented Programming</li>
                                        <li>Data Structures and Algorithms</li>
                                    </ul>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Skills;