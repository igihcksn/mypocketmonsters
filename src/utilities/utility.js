import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { 
    API_POKEMON,
    URL,
} from "./constants";

export const ApolloClinet = new ApolloClient({
    uri: API_POKEMON,
    cache: new InMemoryCache()
});

export const getUserData = () => {
    const userData = fetch(URL.RANDOM_USER)
                        .then(response => response.json())
                        .then(data => data)
                        .catch(error => console.log('user data', error));

    return userData;
}