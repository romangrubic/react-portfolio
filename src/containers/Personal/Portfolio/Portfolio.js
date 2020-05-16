import React, {useEffect} from 'react';
// import { Route } from 'react-router-dom';
import classes from './Portfolio.module.css';
import Projects from './Projects/Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarTrekImg from '../../../components/UI/ProjectImages/StarTrek';
import SnoopImg from '../../../components/UI/ProjectImages/Adverts';
import WeatherImg from '../../../components/UI/ProjectImages/Weather';
import BurgerImg from '../../../components/UI/ProjectImages/Burger';
import AnimalsImg from '../../../components/UI/ProjectImages/Animals';
// import StarTrekProject from './Projects/StarTrek';

const Portfolio = props => {
    useEffect(() => {
            fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                method: 'POST',
                body: JSON.stringify(new Date().toLocaleString() + " Portfolio    0"),
                headers: { 'Content-Type': 'application/json' }
            })
    }, [])

    return (
        <Container>
            <div className={ classes.bg }></div>
            <Row className={ classes.ProjectRow }>
                <Projects link="/portfolio/StarTrek" projectName="E-commerce web-site with discussion board and private messaging" img={ <StarTrekImg /> } />
                <Projects link="/portfolio/Snoop" projectName="Buy/sell web-site with advertisement space" img={ <SnoopImg /> } />
                <Projects link="/portfolio/Weather360" projectName="Weather forecast web-site" img={ <WeatherImg /> } />
                <Projects link="/portfolio/Burgershack" projectName="Food ordering web-site" img={ <BurgerImg /> } />
                <Projects link="/portfolio/Animals" projectName="Memory game" img={ <AnimalsImg /> } />
            </Row>
        </Container>
    )
};

export default Portfolio;