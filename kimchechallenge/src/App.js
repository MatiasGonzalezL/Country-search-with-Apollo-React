import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const App = () => (
  <ApolloProvider client={client}>
    {/* <div>
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
    </div> */}
    <div className="div_principal">
      <div className="div_titulo">
        <h1>Country search</h1>
        <h5>Some random text</h5>
      </div>
      <div>
        <form className="input_general">
          <label>
            <span id="icon">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </span>
            <input className="input_text" type="text" name="name" placeholder="Escribe el país a buscar" />
          </label>
        </form>
      </div>
      <div className="grupo">
        <h2>Group by:</h2>
        <button type="button" className="boton">Continent</button>
        <button type="button" className="boton">Language</button>
      </div>
      <div>
        <h2>Aquí van los países</h2>
      </div>
    </div>
  </ApolloProvider>
);
export default App;
