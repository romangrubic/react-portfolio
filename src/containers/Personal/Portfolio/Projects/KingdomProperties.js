import React, {useEffect} from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import KingdomImg from '../../../../components/UI/ProjectImages/KingdomProperties';
import Button from 'react-bootstrap/Button'

const KingdomPropertiesProject = props => {
    useEffect(() => {
            fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                method: 'POST',
                body: JSON.stringify(new Date().toTimeString() + " KingdomProperties project      0"),
                headers: { 'Content-Type': 'application/json' }
            })
    }, [])
    return (
        <Container>
            <Row>
                <div className={ classes.Picture }>
                    <KingdomImg />
                </div>
            </Row>
            <Row className={ classes.Center }>
                <a href="https://github.com/romangrubic/django-realestatewebsite" target="_blank"
                    rel="noopener noreferrer" data-toggle="tooltip" title="Opens Github repository!">
                    <Button variant="info">Source code</Button></a>
                <a href="https://kingdom-properties.herokuapp.com/" target="_blank"
                    rel="noopener noreferrer" data-toggle="tooltip" title="Hosted on Heroku!">
                    <Button variant="danger">Live website</Button></a>
            </Row>
            <div className={ classes.TextCenter }>
                <h2 className={ classes.ProjectName }>Kingdom Properties</h2>
            </div>
            <div className={ classes.Pitch }>
                <p>Fictive property agency web-site made with Django and PostgreSQL
                </p>
                <p>The goal of this project was to create a web-site for a fictional property agency Kingdom Properties. Users can
                    search for several specific searches to narrow their search for house. There is also admin panel for property realtors
                    to add new listings or realtor to database with ease. Database used is a SQL database PostgresSQL.</p>
            </div>
            <hr></hr>
            <div className={ classes.Pitch }>
                <h3>Main Technology used</h3>
                <ul className={ classes.List }>
                    <li>Python - Django Framework</li>
                    <li>PostgresSQL</li>  
                    <li>Bootstrap</li>
                    <li>Heroku</li>            
                    <li>GitHub</li>                     
                    <li>AWS-S3</li>   
                </ul>
            </div>
        </Container>
    )
};

export default KingdomPropertiesProject;