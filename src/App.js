import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Routes
import Landing from './containers/Personal/Landing/Landing';
import About from './containers/Personal/About/About';
import Contact from './containers/Personal/Contact/Contact';
import Portfolio from './containers/Personal/Portfolio/Portfolio';
import './App.module.css';

import Layout from './containers/Layout/Layout';
import StarTrek from './containers/Personal/Portfolio/Projects/StarTrek';
import Api from './containers/Personal/Portfolio/Projects/Api';
import KingdomProperties from './containers/Personal/Portfolio/Projects/KingdomProperties';
import Snoop from './containers/Personal/Portfolio/Projects/Snoop';
import Weather from './containers/Personal/Portfolio/Projects/Weather';
import Animals from './containers/Personal/Portfolio/Projects/Animals';
import Burger from './containers/Personal/Portfolio/Projects/Burger';

const App = () => {
    useEffect(() => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
            method: 'POST',
            body: JSON.stringify("New visit -------------------"),
            headers: { 'Content-Type': 'application/json' }
        }).then(
            fetch(`${proxy}https://api.ipify.org/?format=json`)
                .then(result => result.json())
                .then(data =>
                    fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                        method: 'POST',
                        body: JSON.stringify(data.ip),
                        headers: { 'Content-Type': 'application/json' }
                    }).then(
                        fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                            method: 'POST',
                            body: JSON.stringify(new Date().toUTCString() + " Time  -"),
                            headers: { 'Content-Type': 'application/json' }
                        }).then(
                            fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
                                method: 'POST',
                                body: JSON.stringify(new Date().toTimeString() + " Landing page    0"),
                                headers: { 'Content-Type': 'application/json' }
                            })
                        )
                    )
                )
        )
    }, [])

    // useEffect(() => {

    // }, [])
    const ROUTES = (
        <Switch>
            <Route path="/portfolio/StarTrek" component={ StarTrek } />
            <Route path="/portfolio/Q&A-Api" component={ Api } />
            <Route path="/portfolio/KingdomProperties" component={ KingdomProperties } />
            <Route path="/portfolio/Snoop" component={ Snoop } />
            <Route path="/portfolio/Weather360" component={ Weather } />
            <Route path="/portfolio/Animals" component={ Animals } />
            <Route path="/portfolio/Burgershack" component={ Burger } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route path="/" component={ Landing } />
            <Redirect to="/" />
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
