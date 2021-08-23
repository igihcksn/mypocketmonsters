import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { API_POKEMON } from "./constants";

export const ApolloClinet = new ApolloClient({
    uri: API_POKEMON,
    cache: new InMemoryCache()
});