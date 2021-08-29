import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { useToast } from "@chakra-ui/react"
import { PokeNotifCatchFail } from './styledComponent';

const PokeContext = React.createContext({});

const PokeProvider = (props) => {

    const toast = useToast();
    
    const [limitData, setLimitData]         = useState(10);
    const [pokemonList, setPokemonList]     = useState({});
    const [isLoadingList, setIsLoadingList] = useState(true);
    const [isLoadingLoad, setIsLoadingLoad] = useState(true);
    const [pokemonDetailArtwork, setPokemonDetailArtwork] = useState({
        artWork: null,
    });
    const [pokemonDetailData, setPokemonDetailData] = useState({
        data: {
            name: null,
        },
    });

    const PokeListData = useQuery(QUERY.GET_LIST_POKEMON, {
        variables: {
            limit: limitData,
            offset: 0,
        }
    });

    useEffect(() => {
        if (PokeListData.data) {
            setPokemonList(PokeListData.data.pokemons.results)
            setIsLoadingList(false)
            setIsLoadingLoad(false)
        };
    }, [PokeListData]);

    const loadMorePokeList = () => {
        setLimitData(limitData + 10);
        setIsLoadingLoad(true)

        PokeListData.fetchMore({
            variables: {
                limit: limitData,
            }
        });
    };

    const probability = { 50 : 50 };

    const randomTry = () => {
        const random = Math.floor(Math.random() * 100);

        for(const prob in probability) {
            if(prob >= random) {
                return true;
            } else {
                toast({
                    position: "top",
                    duration: 3000,
                    render: () => (
                        <PokeNotifCatchFail>
                            Opps pokemon broke free, try again
                        </PokeNotifCatchFail>
                    ),
                })

                return false;
            }
        }
    }

    const catchPokemon = (props) => {
        const ThrowPokeball = randomTry();
        const { setIsModalOpen } = props;

        if (ThrowPokeball) {
            setIsModalOpen(true);
        }
    }

    return (
        <PokeContext.Provider value={{
            pokemonList,
            isLoadingList,
            isLoadingLoad,
            loadMorePokeList,
            randomTry,
            catchPokemon,
            pokemonDetailArtwork,
            setPokemonDetailArtwork,
            pokemonDetailData,
            setPokemonDetailData,
        }}>
            { props.children }
        </PokeContext.Provider>
    )
};

export {
    PokeContext,
    PokeProvider,
};