import React from 'react';
// import classes from './Portfolio.module.css';
import Projects from './Projects/Projects';
import StarTrekImg from '../../../components/UI/ProjectImages/StarTrek';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SnoopImg from '../../../components/UI/ProjectImages/Adverts';

const Portfolio = props => {
    return (
        <Container>
            <h1>Portfolio page</h1>
            <Row>
    <Projects link="/portfolio/Star-Trek-Project" projectName="Star Trek" img={<StarTrekImg />}/>
                <Projects link="/portfolio/Burger-Shop" projectName="Burger Shop"/>
                <Projects link="portfolio/Snoop" projectName="Snoop" img={<SnoopImg />}/>
            </Row>
        </Container>
    )
};

export default Portfolio;