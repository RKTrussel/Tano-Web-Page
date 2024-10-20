import { Container, Card } from 'react-bootstrap';



const About = () => {
    return(
        <>
            <Container>
                <Card className="border border-info" style={{marginTop: '165px'}}>
                    <Card.Header className="fs-2 text-center"> About me. </Card.Header>
                    <Card.Body className="fs-5 text-start">
                        <Card.Text>
                            I am a third-year Computer Science student who is currently studying in University of Cabuyao. My current hobby right now is coding and training myself to learn
                            in a fast pace. I also had a hobby of watching documentaries especially about the tech industries as I am following the tech trends that can happen in the future.
                            I also serve in the church as I felt the love of God when I am partaking the mass. I also share the gospel to my friends whenever they have a question about God.
                            I really do not have a work experience as of now as I am having a hard time to balance my daily life and my studies. However, if I would be given a chance to work, 
                            I would gladly take it.  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default About;