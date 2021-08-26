import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { useHistory } from "react-router-dom";

const PokemonDetails = () => {

    const { location } = useHistory();

    const { loading, data, fetchMore } = useQuery(QUERY.GET_POKEMON_BY_NAME, {
        variables: {
            name: location.state.pokemon.name
        }
    });

    return (
        <>
            <img src={location.state.pokemon.dreamworld} alt={location.state.pokemon.name} />
            <p>
                {location.state.pokemon.name}
            </p>
        </>
    )
};

export default PokemonDetails;