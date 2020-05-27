import React, {useEffect} from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ApiImg from '../../../../components/UI/ProjectImages/Api';
import Button from 'react-bootstrap/Button'

const ApiProject = props => {
    useEffect(() => {
            fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                method: 'POST',
                body: JSON.stringify(new Date().toTimeString() + " Q&A API project      0"),
                headers: { 'Content-Type': 'application/json' }
            })
    }, [])
    return (
        <Container>
            <Row>
                <div className={ classes.Picture }>
                    <ApiImg />
                </div>
            </Row>
            <Row className={ classes.Center }>
                <a href="https://github.com/romangrubic/django-rest-api" target="_blank"
                    rel="noopener noreferrer" data-toggle="tooltip" title="Opens GitHub repository!">
                    <Button variant="info">Source code</Button></a>
                <a href="https://django-api-romangrubic.herokuapp.com/" target="_blank"
                    rel="noopener noreferrer" data-toggle="tooltip" title="Hosted on Heroku!">
                    <Button variant="danger">Live website</Button></a>
            </Row>
            <div className={ classes.TextCenter }>
                <h2 className={ classes.ProjectName }>Q&A API</h2>
            </div>
             <div className={ classes.Pitch }>
                <p>Are you looking for an API for your next project? To create projects that are fun and useful too? Plenty of new developers
                    have hard time learning new programming languages and technologies. If only there were an API out there that has plenty of questions,
                    answers and link for further explaning the question about most popular programming languages and technologies but that is also
                    free to use? Well, there is. With this API, developers can create something like a flashcard APP for learning or maybe a quiz about Javascript.
                    Only their imagination is limit. And I need help to make it better! Feel free to contact me! 
                </p>
            </div>
            <hr></hr>
            <div className={ classes.Pitch }>
                <h3>Description</h3>
                <p>I have created this API to practice Django REST framework to learn how to make a REST Api. It is made with Django and Django REST framework and 
                    database used is PostgreSQL served on Heroku.<br></br>
                    Simple API where new developers can easily manipulate DOM and learn how to make an API call. It contains documentation on how to connect to it
                    and how to make a call with plenty of examples.</p>
            </div>
            <hr></hr>
            <div className={ classes.Pitch }>
                <h3>Main Technology used</h3>
                <ul className={ classes.List }>
                    <li>Python - Django</li>
                    <li>Django REST framework (REST Api)</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                    <li>GitHub</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </Container>
    )
};

export default ApiProject;