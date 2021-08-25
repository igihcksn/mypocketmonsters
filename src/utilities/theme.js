import { extendTheme } from '@chakra-ui/react';

export const PokeThemeProvider = extendTheme({
    components: {
        Button: {
            variants: {
                "poke-dark-orange": {
                    bg: '#af4417',
                    color: '#000000',
                    border: '#fb7823'
                },
            }
        }
    }
})