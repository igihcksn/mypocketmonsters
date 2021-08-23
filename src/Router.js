import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from 'pages/layout';
import { ApolloProvider } from "@apollo/client";
import { ApolloClinet } from 'utilities/utility';

const MainRouter = () => (
    <Router>
        <Switch>
            <ApolloProvider client={ApolloClinet}>
                <Route path="/" component={MainLayout} />
            </ApolloProvider>
        </Switch>
    </Router>
);

export default MainRouter;
