import React, { useContext } from 'react';
import { URL } from 'utilities/constants';
import { SimpleGrid } from "@chakra-ui/react"
import { 
    PokeBoxList, 
    PokeBoxListContainerImage, 
    PokeBoxListInnerImage, 
    PokeBoxListInnerTitle,
    PokeButtonLoadMore,
    PokeButtonText,
    PokeListContainer,
} from 'utilities/styledComponent';
import { useHistory } from "react-router-dom";
import { PokeContext } from 'utilities/context';

const PokemonList = () => {

    const history = useHistory();

    const { 
        isLoadingList,
        loadMorePokeList,
        isLoadingLoad,
        pokemonData, 
    } = useContext(PokeContext);

    const onClickList = (pokemon) => {
        history.push({
            pathname: URL.POKEMON_DETAILS.replace(':slug', pokemon.name),
            state: {
                pokemon
            }
        });
    };

    return (
        <PokeListContainer>
            <SimpleGrid columns={[2, null, 5]} spacing={5} p={5}>
                {
                    !isLoadingList && pokemonData.length && pokemonData.map((list) => (
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
                <PokeButtonText onClick={loadMorePokeList}>
                    { !isLoadingLoad ? 'Loadmore' : 'Please Wait...'}
                </PokeButtonText>
            </PokeButtonLoadMore>
        </PokeListContainer>
    );
};

export default PokemonList;