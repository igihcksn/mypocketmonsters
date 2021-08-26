import React from 'react';
import { PokemonIcon } from 'assets/images';
import { PokeHeader, PokeHeaderImg } from 'utilities/styledComponent';
import { Button, Container, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const Header = () => (
    <PokeHeader>
        <PokeHeaderImg src={PokemonIcon} alt="Pokemon Logo" />
        <Container>
            <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm">
                    Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Container>
    </PokeHeader>
);

export default Header;