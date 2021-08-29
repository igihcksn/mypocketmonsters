import { Trainer } from 'assets/images';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL } from 'utilities/constants';
import { 
    PokeTrainerInfoLeft,
    PokeTrainerInfoRight,
    PokeTrainerName,
    PokeDetailsName,
    PokeTrainerTitle,
    PokeTrainerContainer,
    PokeTainerContentContainer,
    PokeTrainerTitleSection,
    PokeTrainerList,
    PokeBoxList,
    PokeBoxInnerBackground,
    PokeBoxListContainerImage,
    PokeBoxListInnerImage,
    PokeBoxListInnerTitle,
    PokeButtonBack,
} from 'utilities/styledComponent';
import { SimpleGrid } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons';

const TrainerDetails = () => {

    const history = useHistory();

    const pokemonData = JSON.parse(localStorage.getItem('myPokemon'));

    const onClickList = (pokemon) => {
        history.push({
            pathname: URL.POKEMON_DETAILS.replace(':slug', pokemon),
        });
    };

    return (
        <PokeTrainerContainer>
            <PokeTrainerTitle>
                <PokeButtonBack onClick={() => history.push(URL.POKEMON_LIST)}><ArrowBackIcon /> Back</PokeButtonBack>
                <PokeDetailsName>Trainer Information</PokeDetailsName>
            </PokeTrainerTitle>
            <PokeTainerContentContainer>
                <PokeTrainerInfoLeft>
                    <img src={Trainer} alt="trainer"/>
                </PokeTrainerInfoLeft>
                <PokeTrainerInfoRight>
                    <PokeTrainerName>
                        <li>
                            NAME: BUDI
                        </li>
                        <li>
                            AGE: 18
                        </li>
                        <li>
                            HAIR: BLACK
                        </li>
                        <li>
                            HOMETOWN: TWINLEAF TOWN
                        </li>
                        <li>
                            POKEMON: {pokemonData ? pokemonData.length : 0}
                        </li>
                    </PokeTrainerName>
                    <PokeTrainerTitleSection>List Pokemon</PokeTrainerTitleSection>
                    <PokeTrainerList>
                        <SimpleGrid columns={[2, null, 5]} spacing={5} p={5}>
                            {
                                pokemonData && pokemonData.map((list) => (
                                    <PokeBoxList key={list.name} onClick={() => onClickList(list.name)}>
                                        <PokeBoxListContainerImage>
                                            <PokeBoxInnerBackground />
                                            <PokeBoxListInnerImage src={list.artWork.dream_world.front_default} alt={list.name} loading="lazy" />
                                        </PokeBoxListContainerImage>
                                        <PokeBoxListInnerTitle>{list.name}</PokeBoxListInnerTitle>
                                    </PokeBoxList>
                                ))
                            }
                            {
                                !pokemonData && <p>Empty...</p>
                            }
                        </SimpleGrid>
                    </PokeTrainerList>
                </PokeTrainerInfoRight>
            </PokeTainerContentContainer>
        </PokeTrainerContainer>
    );
};

export default TrainerDetails;