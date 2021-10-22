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
    PokeDetailsGameVersions,
    PokeDetailsImg, 
    PokeDetailsInfo,
    PokeDetailsName,
    PokeDetailsSprites, 
    PokeDetailTypes,
    PokeDetailsStats,
    PokeDetailsLeftImage,
    PokeDetailTitleSection,
    PokeDetailsBallImg,
    PokeDetailsActions,
    PokeDetailsGameVersion,
    PokeDetailsEvolutions,
	PokeDetailsEvolutionsCurrent,
} from 'utilities/styledComponent';
import { Skeleton, Stack } from "@chakra-ui/react"
import { PokeContext } from 'utilities/context';
import { PokeballIcon } from 'assets/images';
import { ArrowBackIcon } from '@chakra-ui/icons';
import ModalNickname from './components/modalNickname';
import { importAll } from 'utilities/utility';

const PokemonDetails = () => {

    const history = useHistory();
    const { slug } = useParams();
    const { catchPokemon, pokemonDetailArtwork, setPokemonDetailArtwork } = useContext(PokeContext)

    const [pokemonData, setPokemonData] = useState({
        isLoading: true,
        data: null,
    });
    const [pokemonDetailData, setPokemonDetailData] = useState({
        isLoading: true,
        data: null,
    });
    const [pokemonEvolutionData, setPokemonEvolutionData] = useState({
        isLoading: true,
        data: null,
    });

    const PokeCommonData = useQuery(QUERY.GET_POKEMON_BY_NAME, {
        fetchPolicy: "no-cache",
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
                        data: data
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

    const GenerateStats = (stats) => {
        const res = stats.map((list) => (
            <PokeDetailsStats key={list.stat.name}>{list.stat.name}: {list.base_stat}</PokeDetailsStats>
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

    const GenerateGameVersions = (game_indices) => {
        if (game_indices.length === 0) {
            return <p>No games found</p>
        }

        const gameLogos = importAll(require.context('../../assets/images/game-logos', false, /\.(png|jpe?g|svg)$/));
        const res = game_indices.map((game) => {
            const gameVersionName = game.version.name;
            const logoImport = gameLogos[`${gameVersionName}.png`] || "";

            return (
                <PokeDetailsGameVersion>
                    <img alt={`${gameVersionName}-game-logo`} aria-label={`${gameVersionName} game logo`} src={logoImport.default} />
                </PokeDetailsGameVersion>
            )
        });

        return (
            <PokeDetailsGameVersions>
                {res}
            </PokeDetailsGameVersions>
        )
    };
	const GenerateEvolutions = evolutions => {
		const isCurrentEvo = evolution =>
			evolution === PokeCommonData?.data.pokemon.name;

		const evos = evolutions.map(evo => {
			const isCurrent = isCurrentEvo(evo);
			return isCurrent ? (
				<PokeDetailsEvolutionsCurrent>
					{evo.toUpperCase()}
				</PokeDetailsEvolutionsCurrent>
			) : (
				<PokeDetailsEvolutions>
					{evo.toUpperCase()}
				</PokeDetailsEvolutions>
			);
		});
		return evos;
	};

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
                    <PokeDetailTitleSection>Evolution Chain</PokeDetailTitleSection>
                        <PokeDetailsBoxStatus flex>
                            {!pokemonEvolutionData.isLoading &&
                                GenerateEvolutions([
                                    pokemonEvolutionData.data.species.name,
                                    pokemonEvolutionData.data.evolves_to[0].species
                                        .name,
                                    pokemonEvolutionData.data.evolves_to[0]
                                        .evolves_to[0].species.name,
                                ])}
                            {pokemonEvolutionData.isLoading && (
                                <Skeleton height='20px' />
                            )}
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
                    <PokeDetailTitleSection>Stats</PokeDetailTitleSection>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonDetailData.isLoading &&
                                <PokeDetailsBoxStatusUl>
                                    { GenerateStats(pokemonDetailData.data.stats) }
                                </PokeDetailsBoxStatusUl>
                        }
                        {
                            pokemonData.isLoading && <Skeleton height="20px" />
                        }
                    </PokeDetailsBoxStatus>
                    <PokeDetailTitleSection>Game Versions</PokeDetailTitleSection>
                    <PokeDetailsBoxStatus>
                        {
                            !pokemonDetailData.isLoading && GenerateGameVersions(pokemonDetailData.data.game_indices)
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