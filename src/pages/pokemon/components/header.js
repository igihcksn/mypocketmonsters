import React from 'react';
import { PikachuHead, PokemonIcon } from 'assets/images';
import { PokeButtonBackHeader } from 'utilities/styledComponent';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import "./header.css";

const Header = (props) => {
    const history = useHistory();

    return (
        <div class="poke-header">
            <h1>My Pokemon</h1>
            <p>Search through and find your favorite Pokemon. You can catch them, add them to your collection, and even give them a nickname. Gotta catch 'em all!</p>
            <img src={PokemonIcon} alt="Pokemon Logo" class="pokemon-logo"/>
            <img src={PikachuHead} alt="Pikachu" class="pikachu" />
            <PokeButtonBackHeader isList={props.isList} onClick={() => history.goBack()}><ArrowBackIcon /> Back</PokeButtonBackHeader>
        </div>
    );
};

export default Header;