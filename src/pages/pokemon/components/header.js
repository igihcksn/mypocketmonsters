import React from 'react';
import { PikachuHead, PokemonIcon } from 'assets/images';
import { 
    PokeHeader, 
    PokeHeaderImg, 
    PokeHeaderImgContainer, 
    PokeButtonBackHeader,
    PokeHeaderLeftSide,
    PokeHeaderTitle,
    PokeHeaderDescription, 
} from 'utilities/styledComponent';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();

    return (
        <PokeHeader>
            <PokeHeaderLeftSide>
                <PokeHeaderTitle>My Pokemon</PokeHeaderTitle>
                <PokeHeaderDescription>Search through and find your favorite Pokemon. You can catch them, add them to your collection, and even give them a nickname. Gotta catch 'em all!</PokeHeaderDescription>
            </PokeHeaderLeftSide>
            <PokeHeaderImgContainer isList={props.isList}>
                <PokeHeaderImg src={PokemonIcon} alt="Pokemon Logo"/>
                <PokeHeaderImg src={PikachuHead} alt="Pokemon Logo Head" />
            </PokeHeaderImgContainer>
            <PokeButtonBackHeader isList={props.isList} onClick={() => history.goBack()}><ArrowBackIcon /> Back</PokeButtonBackHeader>
        </PokeHeader>
    );
};

export default Header;