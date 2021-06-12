import { ApolloClient, createHttpLink } from "@apollo/client";

import { cache } from "./state/cache";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_URI,
  credentials: "include",
  connectToDevTools: true,
});

const client = new ApolloClient({
  link,
  cache,
  credentials: "include",
});

export default client;
