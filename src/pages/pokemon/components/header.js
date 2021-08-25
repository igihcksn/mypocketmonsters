import React from 'react';
import { PokemonIcon } from 'assets/images';
import { PokeHeader, PokeHeaderImg } from 'utilities/styledComponent';

const Header = () => (
    <PokeHeader>
        <PokeHeaderImg src={PokemonIcon} alt="Pokemon Logo" />
    </PokeHeader>
);

export default Header;