import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import Landing from './containers/Personal/Landing/Landing';
import './App.module.css';

import Layout from './containers/Layout/Layout';

const App = () => {
    const ROUTES = (
        <Switch>
            <Route path="/" exact component={ Landing } />
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
