import { AppProps } from "next/app";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
