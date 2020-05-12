import React from 'react';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Routes
import Landing from './containers/Personal/Landing/Landing';
import About from './containers/Personal/About/About';
import Contact from './containers/Personal/Contact/Contact';
import Experience from './containers/Personal/Experience/Experience';
import Portfolio from './containers/Personal/Portfolio/Portfolio';
import './App.module.css';

import Layout from './containers/Layout/Layout';
import StarTrekProject from './containers/Personal/Portfolio/Projects/StarTrek';
import SnoopProject from './containers/Personal/Portfolio/Projects/Snoop';
import WeatherProject from './containers/Personal/Portfolio/Projects/Weather';
import AnimalsProject from './containers/Personal/Portfolio/Projects/Animals';

const App = () => {
    const ROUTES = (
        <Switch>
            <Route path="/portfolio/Star-Trek-Project" component={ StarTrekProject } />
            <Route path="/portfolio/Snoop" component={ SnoopProject } />
            <Route path="/portfolio/Weather-360" component={ WeatherProject } />
            <Route path="/portfolio/Animals" component={ AnimalsProject } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/experience" component={ Experience } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route path="/" component={ Landing } />
        </Switch>
    )
    return (
        <div>
            <Layout>
                { ROUTES }
            </Layout>
        </div>
    );
}

export default App;
