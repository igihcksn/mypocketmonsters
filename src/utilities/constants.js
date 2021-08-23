import { gql } from "@apollo/client";

export const API_POKEMON = 'https://graphql-pokeapi.graphcdn.app';

export const URL = {
    POKEMON_LIST    : '/',
    POKEMON_DETAILS : '/{slug}/details',
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
                abilities
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
                message
                status
            }
        }
    `,
}
