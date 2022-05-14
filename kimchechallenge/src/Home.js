import React, { useState } from "react";
import { CountryQuery } from "./Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useLazyQuery } from "@apollo/react-hooks";
import { Card } from 'react-bootstrap';

export const Home = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [countrySearched, setCountrySearched] = useState("");

    const [getCountry, { loading, data, error }] = useLazyQuery(
        CountryQuery,
        {
            variables: { name: countrySearched },
        }
    );

    if (error) return <h2>Error found!</h2>
    if (data) {
        console.log(data);
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        //console.log("Busqueda: "+e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = data.countries.filter((country) => {
            if (country.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return country;
            }
        });
        setUsuarios(resultadoBusqueda);
    };

    //const paisFiltrado = data.map((pais) => pais.name);


    return (
        <div className="div_principal">
            <div className="div_titulo">
                <h1>Country search</h1>
                <h5>Some random text</h5>
            </div>
            <div>
                <form className="input_general">
                    <span id="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </span>
                    <input
                        className="input_text"
                        type="text"
                        name="code"
                        placeholder="Escribe el país a buscar"
                        // onChange={(e) => {
                        //     setCountrySearched(e.target.value)
                        // }}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="grupo">
                <h2>Group by:</h2>
                <button onClick={() => getCountry()} type="button" className="boton">Continent</button>
                <button type="button" className="boton">Language</button>
            </div>
            <div>
                <h2>Aquí van los países</h2>
                <div>
                    {data && data.countries.map((country, idx) => {
                        return (
                            <div className="card" key={idx}>
                                <div className="container">
                                        <h4 className="titulo_pais">{country.emoji} {country.name}</h4>
                                    <div className="div1">
                                        <h6>Code: {country.code}</h6>
                                        <h6>Capital: {country.capital}</h6>
                                        <h6>Native: {country.native}</h6>
                                    </div>
                                    <div className="div2">
                                        <h6>Language: {country.languages.map((language) => language.name)}</h6>
                                        <h6>Language native: {country.languages.map((language) => language.native)}</h6>
                                        <h6>Language code: {country.languages.map((language) => language.code)}</h6>
                                    </div>
                                    <div className="div3">
                                        <h6>Continent: {country.continent.name}</h6>
                                        <h6>Continent code: {country.continent.code}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};