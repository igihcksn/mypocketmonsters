import React from 'react';
import { PikachuHead, PokemonIcon } from 'assets/images';
import { PokeHeader, PokeHeaderImg, PokeHeaderImgContainer, PokeButtonBackHeader } from 'utilities/styledComponent';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();

    return (
        <PokeHeader>
            <PokeHeaderImgContainer isList={props.isList}>
                <img src={PokemonIcon} alt="Pokemon Logo" />
                <PokeHeaderImg src={PikachuHead} alt="Pokemon Logo" />
            </PokeHeaderImgContainer>
            <PokeButtonBackHeader isList={props.isList} onClick={() => history.goBack()}><ArrowBackIcon /> Back</PokeButtonBackHeader>
        </PokeHeader>
    );
};

export default Header;