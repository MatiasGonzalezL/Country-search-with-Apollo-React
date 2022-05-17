import React from "react";
import "./App.css";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./Home copy 4";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //uri: "https://48p1r2roz4.sse.codesandbox.io",
  uri: "https://countries.trevorblades.com"
});

const App = () => (
  <ApolloProvider client={client}>
    <Home/>
  </ApolloProvider>
);

export default App;
