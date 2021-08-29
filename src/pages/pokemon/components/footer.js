import React from 'react';
import { PokeFooter } from 'utilities/styledComponent';

const Footer = (props) => (
    <PokeFooter>
        Pokemon Official Link : 
        <a href="https://www.pokemon.com/us/">Pokemon</a>
        <a href="https://25.pokemon.com/en-us/">25 Pokemon</a>
        <a href="https://unite.pokemon.com/en-us/">Pokemon Unite</a>
        <a href="https://newpokemonsnap.pokemon.com/en-us/">Pokemon Snap</a>
    </PokeFooter>
);

export default Footer;