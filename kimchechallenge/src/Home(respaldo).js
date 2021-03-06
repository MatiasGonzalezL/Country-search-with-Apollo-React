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
    const [botones, setBotones] = useState(false);
    const [botones2, setBotones2] = useState(false);


    //traer datos con Usequery
    const { loading, data } = useQuery(DataQuery)

    if (loading) return <h2 className="loading">Cargando la información...</h2>;
    if (data) {
        var dataquery = data;
    }

    
    //busqueda general
    const buscador = (e) => {
        setBusqueda(e.target.value)
        console.log(e.target.value);
    }


    //botones cambiantes Continent
    const toggleButtons = () => {
        setBotones(!botones);
        setPaises(!paises);
        setIdiomas(idiomas);
        setContinentes(!continentes)
    };


    //botones cambiantes Language
    const toggleButtons2 = () => {
        setBotones2(!botones2);
        setPaises(!paises);
        setContinentes(continentes);
        setIdiomas(!idiomas);
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
                    type="checkbox"
                    className={"toggle-button " + (botones ? "toggle--close": "")}
                    id="boton"  
                    onClick={toggleButtons}
                >Continent
                </button>
                <button
                    type="checkbox"
                    className={"toggle-button " + (botones2 ? "toggle--close2": "")}
                    id="boton"
                    onClick={toggleButtons2}
                >Language
                </button>
            </div>
            <div>
                {continentes ?
                    <div className="container2">
                        {dataquery.continentsData.map((continent, id) => {
                            <h2>Continentes</h2>
                            return (
                                <div className="cards" key={id}>  
                                {continent.countries.filter(user => user.name.toLowerCase().includes(busqueda)) != 0 && <h4 className="titulo_continente">{continent.name}</h4>}                       
                                    {continent && continent.countries.filter(user => user.name.toLowerCase().includes(busqueda)).map((country, idx) => {
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