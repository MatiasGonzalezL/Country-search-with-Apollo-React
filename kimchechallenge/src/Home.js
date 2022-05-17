import React, { useState } from "react";
import { DataQuery } from "./Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";

export const Home = () => {
    const [busqueda, setBusqueda] = useState("");
    const [paises, setPaises] = useState(true);
    const [continentes,setContinentes] = useState(false);
    const [idiomas,setIdiomas] = useState(false);
    

    //traer datos con boton
    const { loading, data } = useQuery(DataQuery)

    if (loading) return "Cargando.......";
    if (data) {
        var dataquery = data;
    }

    
    //busqueda
    const buscador = (e) => {
        setBusqueda(e.target.value)
        console.log(e.target.value);
        console.log(data.continentsData.filter(user => user.name.toLowerCase().includes("an")));
    }

    
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
                <button
                    type="button"
                    className="boton"   
                    onClick={() => {setPaises(!paises); setContinentes(!continentes); setIdiomas(idiomas)}}
                >Continent
                </button>
                <button
                    type="button"
                    className="boton"
                onClick={() => {setPaises(!paises); setIdiomas(!idiomas); setContinentes(continentes)}}
                >Language
                </button>
            </div>
            <div>
                {continentes ?
                    <div className="container2">
                        {dataquery.continentsData.map((conti, id) => {
                            <h2>Continentes</h2>
                            return (
                                <div className="cards" key={id}>  
                                {conti.countries.filter(user => user.name.toLowerCase().includes(busqueda)) != 0 && <h4 className="titulo_continente">{conti.name}</h4>}                       
                                    {conti && conti.countries.filter(user => user.name.toLowerCase().includes(busqueda)).map((country, idx) => {
                                        return (
                                            <div className="card" key={idx}>
                                                <div className="container">
                                                    <h4 className="titulo_pais">{country.emoji} {country.name}</h4>
                                                    <div className="div1">
                                                        <h6>Code: {country.code}</h6>
                                                        <h6>Capital: {country.capital}</h6>
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
                                            </div>)
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    :
                    <>
                        {idiomas ? <div className="container3">
                            {data.languagesData.filter(user => user.name.toLowerCase().includes(busqueda)).map((language, idx) => {
                                return (
                                    <>
                                        <h4 className="titulo_pais">{language.name}</h4>
                                        <div className="card" key={idx}>
                                            <h4 className="titulo_pais">{language.name}</h4>
                                            <div className="container">
                                                <h6 className="titulo_pais">Language code: {language.code}</h6>
                                                <h6 className="titulo_pais">Language native: {language.native}</h6>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                            :
                            <>
                                <div className="container1">
                                    {data.countriesData.filter(user => user.name.toLowerCase().includes(busqueda)).map((country, idx) => {
                                        return (
                                            <div className="card" key={idx}>
                                                <div className="container">
                                                    <h4 className="titulo_pais">{country.emoji} {country.name}</h4>
                                                    <div className="div1">
                                                        <h6>Code: {country.code}</h6>
                                                        <h6>Capital: {country.capital}</h6>
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
                            </>
                        }
                    </>}
            </div>
        </div>
    );
};