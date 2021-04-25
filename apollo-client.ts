import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "./operations/utils";


function client() {
  // Declare variable to store authToken
  let token;

  const httpLink = createHttpLink({
    uri: "http://localhost:5000",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    if (typeof window !== "undefined") {
      token = getCookie("jwt");
    }
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    ssrMode: false,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
}

export default client;
