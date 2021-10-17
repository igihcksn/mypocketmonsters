import React, { useEffect, useState } from 'react';
import { API_POKEMON_OFFICIAL, URL } from 'utilities/constants';
import { Button, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const SeacrhInput = (props) => {
    const history = useHistory();
    const toast = useToast();

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonNotFound, setPokemonNotFound] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const onChangeInput = (event) => {
        setPokemonName(event.target.value)
    };

    const onFindPokemon = () => {
        setLoading(true);
        fetch(`${API_POKEMON_OFFICIAL}/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                history.push(URL.POKEMON_DETAILS.replace(':slug', pokemonName))
            })
            .catch(err => {
                setLoading(false);
                setPokemonNotFound(true)
            })
    }

    useEffect(() => {
        if(pokemonNotFound) {
            toast({
                title: "Opss, we cannot find your pokemon",
                description: "Try to type another pokemon name",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        };
    }, [pokemonNotFound, props, toast])

    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Enter pokemon name'
          bg='#ffffff'
          color='#19072d'
          value={pokemonName}
          onChange={onChangeInput}
        />
        <InputRightElement width='4.5rem'>
          <Button
            bg='#19072d'
            _hover={{
                backgroundColor: '#19072d'
            }}
            h='1.75rem'
            size='sm'
            disabled={pokemonName === '' || isLoading}
            onClick={() => onFindPokemon()}
        >
                { isLoading ? 'Loading' : 'Find' }
          </Button>
        </InputRightElement>
      </InputGroup>
    );
};

export default SeacrhInput;