import React from 'react';
import { 
    PokeFooter,
    PokeFooterLinks,
    PokeFooterCredits,
} from 'utilities/styledComponent';

const Footer = (props) => (
    <PokeFooter>
        <PokeFooterLinks flex wrap>
            <span style = {{width: '100%', fontSize: '1.5rem'}}>Pokemon Official Link : </span>
            <a style={{minWidth: "50%", margin: "30px 0"}}  href="https://www.pokemon.com/us/">Pokemon</a>
            <a style={{minWidth: "50%", margin: "30px 0"}} href="https://25.pokemon.com/en-us/">25 Pokemon</a>
            <a style={{minWidth: "50%", margin: "30px 0"}} href="https://unite.pokemon.com/en-us/">Pokemon Unite</a>
            <a style={{minWidth: "50%", margin: "30px 0"}} href="https://newpokemonsnap.pokemon.com/en-us/">Pokemon Snap</a>
        </PokeFooterLinks>
        <PokeFooterLinks>
            <span style = {{width: '100%', fontSize: '1.5rem'}}>My pokemon dex</span>
            <p style={{ width: '50%', margin: '20px 0' }}>
                Catch you favourite pokemon, collect it and give it a nickname.<br />
                Connect with us on github.
            </p>
            <p style={{ width: '50%' }}>
                <a style={{color: "yellow", margin: "10px 0"}}  href="https://github.com/igihcksn/mypocketmonsters">MY POKEMON DEX</a>
            </p>
        </PokeFooterLinks>
        <PokeFooterCredits>
            <br />
            <div> @ 2021 By igihcksn </div>
        </PokeFooterCredits>
    </PokeFooter>
);

export default Footer;