import React, {useEffect} from 'react';
import classes from './About.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = props => {
    useEffect(() => {
            fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                method: 'POST',
                body: JSON.stringify(new Date().toLocaleString() + " About me    0"),
                headers: { 'Content-Type': 'application/json' }
            })
    }, [])

    return (
        <Container className={ classes.Container }>
            <Row>
                <h1>Summary</h1>
                <p className={ classes.AboutInfo }>
                    Coming from security and retail background, I have developed attention to details,
                    problem-solving skills and customer service. I have accomplished a lot in these past few
                    months and managed to learn new technologies and have projects to present. Now, I am looking
                    for new challenges to further develop my skills and obtain new one.<br></br><br></br>
                    My projects are available in Portfolio section and on my GitHub including documentation.
    </p>
            </Row>
            <hr></hr>
            <Row>
                <h1>Education</h1>
            </Row>
            <Row>
                <Col sm={ 12 } lg={ 6 } className={ classes.Diploma }>
                    <h3>
                        <a href="https://codeinstitute.net/" target="_blank" rel="noopener noreferrer" className={ classes.BlackFont }>Code Institute</a>
                    </h3>
                    <p><b>Diploma in Software Development</b> <br></br>
                        Fully credit rated by Edinburgh Napier University - Level 5 EQF<br></br>
                        April 2020
            </p>
                    {/* <a target="_blank" rel="noopener noreferrer">View Diploma</a> */}
                </Col>
                <Col sm={ 12 } lg={ 6 } className={ classes.Diploma }>
                    <h3>
                        <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className={ classes.BlackFont }>Udemy</a>
                    </h3>
                    <p><b>Certificate in React Development</b> <br></br>
                        May 2020
            </p>
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-22c389e8-54a2-4dec-a1bc-b7d4c154a545.jpg?v=1588960889000"
                        target="_blank" rel="noopener noreferrer">View Certificate</a>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <h1>Technology stack</h1>
                <p className={ classes.AboutInfo }>I specialise in HTML, CSS, JavaScript and Python languages and manipulating databases.
    Passionate about creating a positive user experience, I enjoy the challenge working with and adapting new technologies as they develop.
    </p>
                <ul className={classes.MainList}>
                    <li>Programming:</li>
                        <ul className={classes.SecondList}>
                            <li>HTML5 + CSS3</li>
                            <li>Javascript</li>
                            <ul className={classes.ThirdList}>
                                <li>ECMAScript 2015 (ES6)</li>
                                <li>React (including Hooks, React Router and Redux)</li>
                                <li>jQuery</li>
                            </ul>
                            <li>Python</li>
                            <ul className={classes.ThirdList}>
                                <li>Flask</li>
                                <li>Django</li>
                            </ul>
                        </ul>
                    <li>Databases:</li>
                        <ul className={classes.SecondList}>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>Firebase</li>
                        </ul>
                    <li>Tools:</li>
                        <ul className={classes.SecondList}>
                            <li>Git - version control</li>
                            <ul className={classes.ThirdList}>
                                <li>GitHub</li>
                                <li>GitPod</li>
                            </ul>
                            <li>Hosting</li>
                            <ul className={classes.ThirdList}>
                                <li>GitHub Pages</li>
                                <li>Heroku</li>
                            </ul>
                            <li>Testing</li>
                            <ul className={classes.ThirdList}>
                                <li>Jasmine</li>
                                <li>TravisCI</li>
                            </ul>
                            <li>Additional</li>
                            <ul className={classes.ThirdList}>
                                <li>Amazon Web Services</li>
                                <li>Stripe</li>
                                <li>EmailJS</li>
                            </ul>
                        </ul>
                </ul>
            </Row>
            <hr></hr>
        </Container>
    )
};

export default About;