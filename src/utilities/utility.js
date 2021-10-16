import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { 
    API_POKEMON,
    API,
} from "./constants";

export const ApolloClinet = new ApolloClient({
    uri: API_POKEMON,
    cache: new InMemoryCache()
});

export const PokeApiV1 = new ApolloClient({
    uri: API.POKE_API_V1_BETA,
    cache: new InMemoryCache()
});

export const getUserData = () => {
    const userData = fetch(API.RANDOM_USER)
                        .then(response => response.json())
                        .then(data => data)
                        .catch(error => console.log('user data', error));

    return userData;
}