import { gql } from "@apollo/client";

export const API_POKEMON = 'https://graphql-pokeapi.graphcdn.app';

export const URL = {
    POKEMON_LIST    : '/',
    POKEMON_DETAILS : '/:slug/details',
    TRAINER_INFO    : '/trainer',
};

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
                weight
                message
                status
            }
        }
    `,
}
