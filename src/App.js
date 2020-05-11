import React from 'react';
import { Switch, Route} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Routes
import Landing from './containers/Personal/Landing/Landing';
import About from './containers/Personal/About/About';
import Contact from './containers/Personal/Contact/Contact';
import Experience from './containers/Personal/Experience/Experience';
import Portfolio from './containers/Personal/Portfolio/Portfolio';
import './App.module.css';

import Layout from './containers/Layout/Layout';

const App = () => {
    const ROUTES = (
        <Switch>
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
