import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import Cookies from "js-cookie";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function isomorphicLink() {
  if (typeof window === "undefined") {
    //in server mode, specify the api url and headers(except headers requiring access to the browser enviroment)

    const { createHttpLink } = require("@apollo/client/link/http");
    const httpLink = createHttpLink({
      uri: "http://localhost:5000",
    });
    return httpLink;
  } else {
    //in client mode, specify the normal api url with headers (some are only accesible in the browser)

    //api url
    const { createHttpLink } = require("@apollo/client/link/http");
    const httpLink = createHttpLink({
      uri: "http://localhost:5000",
    });

    //headers
    const { setContext } = require("@apollo/client/link/context");
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      };
    });

    return authLink.concat(httpLink);
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: isomorphicLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  let _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
