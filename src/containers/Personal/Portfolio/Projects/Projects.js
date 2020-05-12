import React from 'react';
// import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const Projects = (props) => {
    return (
        <Col xs={ 12 } sm={ 6 }>
            <Card style={ { width: '25rem', margin: '20px' } }>
            <a href={ props.link }>
                {props.img}
                </a>
                <Card.Body>
                    <Card.Title>{props.projectName}</Card.Title>
                </Card.Body>
            </Card>
            </Col>
    )
};

export default Projects;