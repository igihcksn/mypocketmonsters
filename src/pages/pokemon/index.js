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
    PokeFilterList,
    PokeListContainer,
} from 'utilities/styledComponent';
import { useHistory } from "react-router-dom";
import { PokeContext } from 'utilities/context';
import SeacrhInput from './components/searchInput';

const PokemonList = () => {

    const history = useHistory();

    const {
        isLoadingList,
        loadMorePokeList,
        isLoadingLoad,
        pokemonList,
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
            <PokeFilterList>
                <SeacrhInput history={history} />
            </PokeFilterList>
            <SimpleGrid columns={[2, null, 5]} spacing={5} p={5}>
                {
                    !isLoadingList && pokemonList.length && pokemonList.map((list) => (
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