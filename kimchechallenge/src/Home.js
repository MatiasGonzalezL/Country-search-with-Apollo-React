import React, { useState } from "react";
import { CountryQuery } from "./Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";

export const Home = () => {
    const [busqueda, setBusqueda] = useState("");


    //traer datos
    const { loading, data, error } = useQuery(CountryQuery);
            
        if (loading) return "Cargando...";
        if (error) return `Error! ${error.meesage}`;
        if (data) {
            console.log(data);
        }

    
    //busqueda
     const buscador = (e) => {
        setBusqueda(e.target.value)
        //console.log(e.target.value);
    }


    //filtrado
    let resultados = [];
    if(!busqueda)
    {
        resultados = data.countries
    }else {
        resultados = data.countries.filter((dato) => 
        dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
        )
        console.log(resultados);
    };


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
                        value={busqueda}
                        onChange={buscador}
                    />
                </form>
            </div>
            <div className="grupo">
                <h2>Group by:</h2>
                <button  type="button" className="boton">Continent</button>
                <button type="button" className="boton">Language</button>
            </div>
            <div>
                <h2>Aquí van los países</h2>
                <div>
                    {resultados && resultados.map((country, idx) => {
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