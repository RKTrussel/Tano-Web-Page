import { Container, Card } from "react-bootstrap";
import '../index.css';

const Home = () => {
    return (
        <> 
                <Container>
                    <header className="text-center" style={{margin: "60px"}}>
                        <h1>Hello user! My name is Russel Ken and welcome to my Web Page!</h1>
                    </header>

                    <Card className="border border-info">
                        <Card.Header className="fs-2 text-center">My Dreams</Card.Header>
                        <Card.Body>
                            <Card.Text className="fs-5 text-start">
                                I have a lot of dream since I was a kid. One of my biggest dream when I was a kid was to become an Electrical Engineer.
                                I really wished to become like those who work in Meralco who fixes the line pole when there is a problem to it. I also dreamed building
                                a robot which has an Artificial Intelligence so that it can help me in anything such as household chores, solving problems, and other things that a
                                human can do. I also once dreamt of becoming a scientist as I wanted to invent anything in the palms of my hand. I really think I have been influenced
                                by Phineas & Ferb that invents anything because of their ideas in their mind. I once dreamed about becoming a Mathematician when I was in High School because
                                I idolized my teachers who taught mathematics. Even though I am still bad at mathematics, their passion for teaching made me pursue becoming a mathematician at that time.
                                All of these dreams are once I really wished to become. These dreams shaped me who I am now because right now, I am eager to learn anything and wanted to apply it at fast rate because
                                the flow of information at this age is really fast and I do not want to be left behind.
                            </Card.Text>
                        </Card.Body>    
                    </Card>               
                </Container>
        </>
    );
}

export default Home;