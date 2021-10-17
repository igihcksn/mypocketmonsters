import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { API_POKEMON_OFFICIAL, QUERY, URL } from 'utilities/constants';
import { useHistory, useParams } from "react-router-dom";
import {
    PokeDetailsAbilitiesMoves,
    PokeDetailsBoxStatus,
    PokeDetailsBoxStatusUl,
    PokeDetailsCatch,
    PokeDetailsCommon,
    PokeDetailsContainer,
    PokeDetailsImg,
    PokeDetailsInfo,
    PokeDetailsName,
    PokeDetailsSprites,
    PokeDetailTypes,
    PokeDetailsLeftImage,
    PokeDetailTitleSection,
    PokeDetailsBallImg,
    PokeDetailsActions,
} from 'utilities/styledComponent';
import { Skeleton, Stack } from "@chakra-ui/react"
import { PokeContext } from 'utilities/context';
import { PokeballIcon } from 'assets/images';
import { ArrowBackIcon } from '@chakra-ui/icons';
import ModalNickname from './components/modalNickname';

const PokemonDetails = () => {

    const history = useHistory();
    const { slug } = useParams();
    const { catchPokemon, pokemonDetailArtwork, setPokemonDetailArtwork, setPokemonDetailData } = useContext(PokeContext)

    const [pokemonData, setPokemonData] = useState({
        isLoading: true,
        data: null,
    });
    const [pokemonEvolutionData, setPokemonEvolutionData] = useState({
        isLoading: true,
        data: null,
    });

    const PokeCommonData = useQuery(QUERY.GET_POKEMON_BY_NAME, {
        variables: {
            name: slug
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const getEvolutionChain = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPokemonEvolutionData({
            isLoading: false,
            data: data.chain
        }));
    };

    const getDetailsData = useCallback(
        (pokemonName) => {
            fetch(`${API_POKEMON_OFFICIAL}/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(data => {
                    setPokemonDetailArtwork({
                        artWork: data.sprites.other,
                    });
                    setPokemonDetailData({
                        data: {
                            name: data.name,
                        }
                    });
                }
            );
        }, [setPokemonDetailArtwork, setPokemonDetailData]
    );

    const getSpeciesData = useCallback(
        (url) => {
            fetch(url)
            .then(res => res.json())
            .then(data => getEvolutionChain(data.evolution_chain.url))
        }, []
    );

    useEffect(() => {
        const { loading, data } = PokeCommonData;

        try {
            if(data) {
                setPokemonData({
                    isLoading: loading,
                    data: data.pokemon,
                })

                getSpeciesData(data.pokemon.species.url)
                getDetailsData(data.pokemon.name);
            }
        } catch (error) {
            console.log(error)
        }
    }, [PokeCommonData, getDetailsData, getSpeciesData, history]);

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
            <img src={sprites.front_default} width="96" height="96" alt="Front Default" loading="lazy" />
            <img src={sprites.front_shiny} width="96" height="96" alt="Back Shiny" loading="lazy" />
            <img src={sprites.back_default} width="96" height="96" alt="Back Default" loading="lazy" />
            <img src={sprites.back_shiny} width="96" height="96" alt="Back Shiny" loading="lazy" />
        </PokeDetailsSprites>
    );

    return (
        <PokeDetailsContainer>
            <PokeDetailsLeftImage>
                {
                    !pokemonDetailArtwork.artWork && <Skeleton height="250px" />
                }
                {
                    pokemonDetailArtwork.artWork && <>
                        <PokeDetailsImg src={pokemonDetailArtwork.artWork && pokemonDetailArtwork.artWork.dream_world.front_default } alt={pokemonData.data && pokemonData.data.name} loading="lazy" />
                        <PokeDetailsActions>
                            <PokeDetailsCatch onClick={() => history.push(URL.POKEMON_LIST)}>
                                <ArrowBackIcon /> Back
                            </PokeDetailsCatch>
                            <PokeDetailsCatch onClick={() => catchPokemon({setIsModalOpen})}>
                                <PokeDetailsBallImg width="30px" height="30px" src={PokeballIcon} alt="Pokeball" />
                                Catch
                            </PokeDetailsCatch>
                            <PokeDetailsCatch onClick={() => history.push(URL.TRAINER_INFO)}>
                                My Pokemon
                            </PokeDetailsCatch>
                        </PokeDetailsActions>
                    </>
                }
            </PokeDetailsLeftImage>
            <PokeDetailsInfo>
                <PokeDetailsCommon>
                    <PokeDetailsName>
                        {pokemonData.data && pokemonData.data.name}
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
                            pokemonData.isLoading && <Stack>
                                <Skeleton height="20px" />
                                <Skeleton height="20px" />
                                <Skeleton height="20px" />
                                <Skeleton height="20px" />
                            </Stack>
                        }
                    </PokeDetailsBoxStatus>
                    <PokeDetailTitleSection>Sprites</PokeDetailTitleSection>
                    <PokeDetailsBoxStatus flex>
                        {
                            !pokemonData.isLoading && GenerateSprites(pokemonData.data.sprites)
                        }
                        {
                            pokemonData.isLoading && <Skeleton height="20px" />
                        }
                    </PokeDetailsBoxStatus>
                    <PokeDetailTitleSection>Moves</PokeDetailTitleSection>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonData.isLoading && GenerateMoves(pokemonData.data.moves)
                        }
                        {
                            pokemonData.isLoading && <Skeleton height="20px" />
                        }
                    </PokeDetailsBoxStatus>
                </PokeDetailsCommon>
            </PokeDetailsInfo>
            <ModalNickname
                isOpen={isModalOpen}
                onOpen={() => setIsModalOpen(true)}
                onClose={() => setIsModalOpen(false)}
                commonData={pokemonData}
                artworkData={pokemonDetailArtwork} />
        </PokeDetailsContainer>
    )
};

export default PokemonDetails;