import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from 'pages/layout';

const MainRouter = () => (
    <Router>
        <Switch>
            <Route path="/" component={MainLayout} />
        </Switch>
    </Router>
);

export default MainRouter;
