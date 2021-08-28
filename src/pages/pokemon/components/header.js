import React from 'react';
import { PikachuHead, PokemonIcon } from 'assets/images';
import { PokeHeader, PokeHeaderImg } from 'utilities/styledComponent';

const Header = () => (
    <PokeHeader>
        <img src={PokemonIcon} alt="Pokemon Logo" />
        <PokeHeaderImg src={PikachuHead} alt="Pokemon Logo" />
    </PokeHeader>
);

export default Header;