import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from 'pages/layout';
import { ApolloProvider } from "@apollo/client";
import { ApolloClinet } from 'utilities/utility';
import { motion } from "framer-motion";
import { PokeProvider } from 'utilities/context';

const MainRouter = () => (
    <Router>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Switch>
                <ApolloProvider client={ApolloClinet}>
                    <PokeProvider>
                        <Route path="/" component={MainLayout} />
                    </PokeProvider>
                </ApolloProvider>
            </Switch>
        </motion.div>
    </Router>
);

export default MainRouter;
