import React from 'react';
import classes from './Portfolio.module.css';
import Projects from './Projects/Projects';
import StarTrekImg from '../../../components/UI/ProjectImages/StarTrek';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SnoopImg from '../../../components/UI/ProjectImages/Adverts';
import WeatherImg from '../../../components/UI/ProjectImages/Weather';
import BurgerImg from '../../../components/UI/ProjectImages/Burger';
import AnimalsImg from '../../../components/UI/ProjectImages/Animals';

const Portfolio = props => {
    return (
        <Container>
            <div className={ classes.bg }></div>
            <Row className={ classes.ProjectRow }>
                <Projects link="/portfolio/Star-Trek-Project" projectName="Star Trek" img={ <StarTrekImg /> } />
                <Projects link="portfolio/Snoop" projectName="Snoop" img={ <SnoopImg /> } />
                <Projects link="/portfolio/Weather-360" projectName="Weather 360°" img={ <WeatherImg /> } />
                <Projects link="/portfolio/Burger-Shack" projectName="Burger Shack" img={ <BurgerImg /> } />
                <Projects link="/portfolio/Animals" projectName="Animals" img={ <AnimalsImg /> } />
            </Row>
        </Container>
    )
};

export default Portfolio;