import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { SimpleGrid } from "@chakra-ui/react"
import { 
    PokeBoxList, 
    PokeBoxListContainerImage, 
    PokeBoxListInnerImage, 
    PokeBoxListInnerTitle 
} from 'utilities/styledComponent';

const PokemonList = () => {

    const [limit, setLimit] = useState(10);

    const { loading, data, fetchMore } = useQuery(QUERY.GET_LIST_POKEMON, {
        variables: {
            limit: limit,
            offset: 1
        }
    });

    const loadMore = () => {
        setLimit(limit + 10);

        fetchMore({
            variables: {
                limit: limit,
                offset: 1,
            }
        })
    };

    return (
        <>
            <SimpleGrid columns={[2, null, 5]} spacing={5} p={4}>
                {
                    !loading && data.pokemons.results.map((list) => (
                        <PokeBoxList key={list.id}>
                            <PokeBoxListContainerImage>
                                <PokeBoxListInnerImage src={list.dreamworld} alt={list.name} loading="lazy" />
                            </PokeBoxListContainerImage>
                            <PokeBoxListInnerTitle>{list.name}</PokeBoxListInnerTitle>
                        </PokeBoxList>
                    ))
                }
            </SimpleGrid>
            <button onClick={loadMore} >
                Load moore
            </button>
        </>
    );
};

export default PokemonList;