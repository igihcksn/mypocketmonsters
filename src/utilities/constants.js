import { gql } from "@apollo/client";

export const API_POKEMON = 'https://graphql-pokeapi.graphcdn.app';

export const URL = {
    POKEMON_LIST    : '/',
    POKEMON_DETAILS : '/:slug/details',
    TRAINER_INFO    : '/trainer',
};

export const POKEMON_TYPES = {
    'normal': '#A8A878',
    'fighting': '#C03028',
    'flying': '#A890F0',
    'poison': '#A040A0',
    'ground': '#E0C068',
    'rock': '#B8A038',
    'bug': '#A8B820',
    'ghost': '#705898',
    'steel': '#B8B8D0',
    'fire': '#F08030',
    'water': '6890F0',
    'grass': '#78C850',
    'electric': '#F8D030',
    'psychic': '#F85888',
    'ice': '#98D8D8',
    'dragon': '#7038F8',
    'dark': '#705848',
    'fairy': '#EE99AC',
    'unknown': '#68A090',
    'shadow': '#68A090',
}

export const QUERY = {
    GET_LIST_POKEMON: gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                id
                url
                name
                image
                dreamworld
                artwork
            }
        }
    }
    `,
    GET_POKEMON_BY_NAME: gql`
        query pokemon($name: String!) {
            pokemon(name: $name) {
                id
                name
                abilities {
                    ability {
                    name
                    }
                }
                moves {
                    move {
                    name
                    }
                }
                types {
                    type {
                    name
                    }
                }
                forms {
                    id
                    name
                }
                game_indices {
                    game_index
                    version {
                        id
                        name
                    }
                }
                height
                sprites {
                    back_default
                    back_female
                    back_shiny
                    back_shiny_female
                    front_default
                    front_shiny
                    front_shiny_female
                }
                stats {
                    base_stat
                    effort
                    stat {
                        id
                        name
                    }
                }
                species {
                    url
                    name
                }
                weight
                message
                status
            }
        }
    `,
}
