import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { URL } from 'utilities/constants';

// import components
const PokemonList = lazy(() => import("../pokemon"));
const PokemonDetails = lazy(() => import("../pokemon/details"));
const TrainerInfo = lazy(() => import("../trainer"));

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to={URL.POKEMON_LIST}>Home</Link>
            </li>
            <li>
                <Link to={URL.POKEMON_DETAILS}>Details</Link>
            </li>
            <li>
                <Link to={URL.TRAINER_INFO}>Trainer</Link>
            </li>
        </ul>
    </nav>
);

const NotFound = () => (
    <p>Not Found</p>
);

const MainLayout = () => (
    <>
        <Navbar />

        <Suspense fallback={<span>Loading items...</span>}>
            <Switch>
                <Route path={URL.POKEMON_LIST} component={PokemonList} exact />
                <Route path={URL.POKEMON_DETAILS} component={PokemonDetails} />
                <Route path={URL.TRAINER_INFO} component={TrainerInfo} />

                <Route component={NotFound} />
            </Switch>
        </Suspense>   
    </>
);

export default MainLayout;
