import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { useHistory, useParams } from "react-router-dom";
import { 
    PokeDetailsAbilitiesMoves,
    PokeDetailsBoxStatus,
    PokeDetailsBoxStatusUl,
    PokeDetailsCommon, 
    PokeDetailsContainer, 
    PokeDetailsImg, 
    PokeDetailsInfo,
    PokeDetailsName,
    PokeDetailsSprites, 
    PokeDetailTypes,
} from 'utilities/styledComponent';

const PokemonDetails = () => {

    const { location } = useHistory();
    const { slug } = useParams();

    const [pokemonData, setPokemonData] = useState({
        isLoading: true,
        data: null,
    });
    const [pokemonEvolutionData, setPokemonEvolutionData] = useState({
        isLoading: true,
        data: null,
    });

    const PokeDetailsData = useQuery(QUERY.GET_POKEMON_BY_NAME, {
        variables: {
            name: slug
        }
    });

    const getEvolutionChain = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPokemonEvolutionData({
            isLoading: false,
            data: data.chain
        }))
    }
    
    const getSpeciesData = useCallback(
        (url) => {
            fetch(url)
            .then(res => res.json())
            .then(data => getEvolutionChain(data.evolution_chain.url))
        }, []
    );

    useEffect(() => {
        const { loading, data } = PokeDetailsData
        
        if(data) {
            setPokemonData({
                isLoading: loading,
                data: data.pokemon, 
            })

            getSpeciesData(data.pokemon.species.url)
        }
    }, [PokeDetailsData, getSpeciesData]);

    const GenerateTypes = (types) => {
        const res = types.map((list) => (
            <PokeDetailTypes key={list.type.name} type={list.type.name}>
                {list.type.name}
            </PokeDetailTypes>
        ));

        return res;
    };

    const GenerateAbilities = (abilities) => {
        const res = abilities.map((list) => (
            <PokeDetailsAbilitiesMoves key={list.ability.name}>{list.ability.name}</PokeDetailsAbilitiesMoves>
        ));

        return res;
    };

    const GenerateMoves = (moves) => {
        const res = moves.map((list) => (
            <PokeDetailsAbilitiesMoves key={list.move.name} type="move">{list.move.name}</PokeDetailsAbilitiesMoves>
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
            <PokeDetailsImg src={location.state && location.state.pokemon.dreamworld} alt={location.state && location.state.pokemon.name} loading="lazy" />
            <PokeDetailsInfo>
                <PokeDetailsCommon>
                    <PokeDetailsName>
                        {location.state && location.state.pokemon.name}
                    </PokeDetailsName>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonData.isLoading &&
                                <PokeDetailsBoxStatusUl>
                                    <li>
                                        TYPES: { GenerateTypes(pokemonData.data.types) }
                                    </li>
                                    <li>
                                        HEIGHT: { pokemonData.data.height } m
                                    </li>
                                    <li>
                                        WEIGHT: { pokemonData.data.weight } kg
                                    </li>
                                    <li>
                                        ABILITIES: { GenerateAbilities(pokemonData.data.abilities) }
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