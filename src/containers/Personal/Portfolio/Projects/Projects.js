import React from 'react';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import classes from './Projects.module.css'

const Projects = (props) => {
    return (
            <Col xs={ 12 } sm={6} className={classes.Project}>
                <NavLink to={ props.link }>
                    <div className={classes.Logo}>
                    { props.img }
                    </div>
                </NavLink>
                <h1>{props.projectName}</h1>
            </Col>

    )
};

export default Projects;