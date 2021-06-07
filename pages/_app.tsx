import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.intialApolloState);
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
