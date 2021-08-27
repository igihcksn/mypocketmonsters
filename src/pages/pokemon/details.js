import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { useHistory, useParams } from "react-router-dom";
import { 
    PokeDetailsBoxStatus,
    PokeDetailsBoxStatusUl,
    PokeDetailsCommon, 
    PokeDetailsContainer, 
    PokeDetailsImg, 
    PokeDetailsInfo,
    PokeDetailsName,
    PokeDetailsSprites, 
} from 'utilities/styledComponent';

const PokemonDetails = () => {

    const { location } = useHistory();
    const { slug } = useParams();

    const [pokemonData, setPokemonData] = useState({
        isLoading: true,
        data: null,
    });

    const PokeDetailsData = useQuery(QUERY.GET_POKEMON_BY_NAME, {
        variables: {
            name: slug
        }
    });

    useEffect(() => {
        const { loading, data } = PokeDetailsData
        
        if(data) {
            setPokemonData({
                isLoading: loading,
                data: data.pokemon, 
            })
        }
    }, [PokeDetailsData]);

    const GenerateTypes = (types) => {
        const res = types.map((list) => (
            <span key={list.type.name} style={{marginLeft: '5px'}}>{list.type.name}</span>
        ));

        return res;
    };

    const GenerateAbilities = (abilities) => {
        const res = abilities.map((list) => (
            <span key={list.ability.name} style={{marginLeft: '5px'}}>{list.ability.name}</span>
        ));

        return res;
    };

    const GenerateMoves = (moves) => {
        const res = moves.map((list) => (
            <span key={list.move.name} style={{marginLeft: '5px', backgroundColor: 'grey'}}>{list.move.name}</span>
        ));

        return res;
    };

    const GenerateSprites = (sprites) => (
        <PokeDetailsSprites>
            <img src={sprites.front_default} alt="Front Default" loading="lazy" />
            <img src={sprites.front_shiny} alt="Back Shiny" loading="lazy" />
            <img src={sprites.back_default} alt="Back Default" loading="lazy" />
            <img src={sprites.back_shiny} alt="Back Shiny" loading="lazy" />
        </PokeDetailsSprites>
    );

    return (
        <PokeDetailsContainer>
            <PokeDetailsImg src={location.state.pokemon.dreamworld} alt={location.state.pokemon.name} loading="lazy" />
            <PokeDetailsInfo>
                <PokeDetailsCommon>
                    <PokeDetailsName>
                        {location.state.pokemon.name}
                    </PokeDetailsName>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonData.isLoading &&
                                <PokeDetailsBoxStatusUl>
                                    <li>
                                        Type: { GenerateTypes(pokemonData.data.types) }
                                    </li>
                                    <li>
                                        Height: { pokemonData.data.height } m
                                    </li>
                                    <li>
                                        Weigh: { pokemonData.data.weight } kg
                                    </li>
                                    <li>
                                        Abilities: { GenerateAbilities(pokemonData.data.abilities) }
                                    </li>
                                </PokeDetailsBoxStatusUl>
                        }
                        {
                            pokemonData.isLoading && <p>Loading data...</p>
                        }
                    </PokeDetailsBoxStatus>
                    <h4>Sprites</h4>
                    <PokeDetailsBoxStatus flex>
                        {
                            !pokemonData.isLoading && GenerateSprites(pokemonData.data.sprites)
                        }
                    </PokeDetailsBoxStatus>
                    <h4>Moves</h4>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonData.isLoading && GenerateMoves(pokemonData.data.moves)
                        }
                    </PokeDetailsBoxStatus>
                </PokeDetailsCommon>
            </PokeDetailsInfo>
        </PokeDetailsContainer>
    )
};

export default PokemonDetails;