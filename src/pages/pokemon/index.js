import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY, URL } from 'utilities/constants';
import { SimpleGrid } from "@chakra-ui/react"
import { 
    PokeBoxList, 
    PokeBoxListContainerImage, 
    PokeBoxListInnerImage, 
    PokeBoxListInnerTitle,
    PokeButtonLoadMore,
    PokeButtonText,
} from 'utilities/styledComponent';
import { useHistory } from "react-router-dom";

const PokemonList = () => {

    const history = useHistory();

    const [limitData, setLimitData] = useState(10);
    const [pokemonData, setPokemonData] = useState({});
    const [isLoading, setLoading] = useState(false);

    const { loading, data, fetchMore } = useQuery(QUERY.GET_LIST_POKEMON, {
        variables: {
            limit: limitData,
            offset: 0,
        }
    });

    useEffect(() => {
        if (data && pokemonData) {
            setPokemonData(data.pokemons.results)
            setLoading(loading);
        };
    }, [data, loading, pokemonData])

    const loadMore = () => {
        setLimitData(limitData + 10);

        fetchMore({
            variables: {
                limit: limitData,
            }
        })
    };

    const onClickList = (pokemon) => {
        history.push({
            pathname: URL.POKEMON_DETAILS.replace(':slug', pokemon.name),
            state: {
                pokemon
            }
        });
    };

    return (
        <>
            <SimpleGrid bg="#6523b6" columns={[2, null, 5]} spacing={5} p={5}>
                {
                    !isLoading && pokemonData.length && pokemonData.map((list) => (
                        <PokeBoxList key={list.id} onClick={() => onClickList(list)}>
                            <PokeBoxListContainerImage>
                                <PokeBoxListInnerImage src={list.dreamworld} alt={list.name} loading="lazy" />
                            </PokeBoxListContainerImage>
                            <PokeBoxListInnerTitle>{list.name}</PokeBoxListInnerTitle>
                        </PokeBoxList>
                    ))
                }
            </SimpleGrid>
            <PokeButtonLoadMore>
                <PokeButtonText onClick={loadMore}>
                    { !loading ? 'Loadmore' : 'Please Wait...'}
                </PokeButtonText>
            </PokeButtonLoadMore>
        </>
    );
};

export default PokemonList;