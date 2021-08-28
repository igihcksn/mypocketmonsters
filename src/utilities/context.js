import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';

const PokeContext = React.createContext({});

const PokeProvider = (props) => {
    
    const [limitData, setLimitData]         = useState(10);
    const [pokemonData, setPokemonData]     = useState({});
    const [isLoadingList, setIsLoadingList] = useState(true);
    const [isLoadingLoad, setIsLoadingLoad] = useState(true);

    const PokeListData = useQuery(QUERY.GET_LIST_POKEMON, {
        variables: {
            limit: limitData,
            offset: 0,
        }
    });

    useEffect(() => {
        if (PokeListData.data) {
            setPokemonData(PokeListData.data.pokemons.results)
            setIsLoadingList(false)
            setIsLoadingLoad(false)
        };
    }, [PokeListData])

    const loadMorePokeList = () => {
        setLimitData(limitData + 10);
        setIsLoadingLoad(true)

        PokeListData.fetchMore({
            variables: {
                limit: limitData,
            }
        })
    };

    return (
        <PokeContext.Provider value={{
            pokemonData,
            isLoadingList,
            isLoadingLoad,
            loadMorePokeList,
            randomTry: props.injectValue.randomTry,
        }}>
            { props.children }
        </PokeContext.Provider>
    )
};

export {
    PokeContext,
    PokeProvider,
};