import React, { useState } from "react";
import { LanguageFilterQuery } from "./Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useLazyQuery } from "@apollo/react-hooks";

export const Home = () => {
    const [busqueda, setBusqueda] = useState("");


     //traer datos con boton
     const [getLanguage, {loading, data}] = useLazyQuery(LanguageFilterQuery)

        if (loading) return "Cargando.......";
        if (data) {
            console.log(data)
        }

    //  const {loading2, data2, error2} = useQuery(CountryQuery);
            
    //     if (loading2) return "Cargando...";
    //     if (error2) return `Error! ${error2.meesage}`;
    //     if (data2) {
    //         console.log(data2);
    //     } else{
    //         return false
    //     }



    //busqueda
     const buscador = (e) => {
        setBusqueda(e.target.value)
        console.log(e.target.value);
    }


    //filtrado
    let resultados = [];
    if(!busqueda)
    {
        resultados = data
    }else {
        resultados = data.languages.filter((dato) => 
        dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
        )
        console.log(resultados);
    };


    //filtrado con boton Continente
    // let resultadoContinente = [];
    // if(!busqueda)
    // {
    //     resultadoContinente = data
    // } else {
    //     resultadoContinente = data.continents.countries.filter((dato) =>
    //     dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    //     )
    //     console.log(resultadoContinente);
    // }




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
                    
                >Continent
                </button>
                <button 
                    type="button"
                    className="boton"
                    onClick={() => getLanguage()}
                >Language
                </button>
            </div>
            <div>
                
                <div>
                    {resultados && resultados.languages.map((language, idx) => {
                        return (
                            <>
                            <h4 className="titulo_pais">{language.name}</h4>
                                    <div className="card" key={idx}>
                                <div className="container">
                                        <h4 className="titulo_pais">- Language name: {language.name}</h4>
                                        <h4 className="titulo_pais">- Language code: {language.code}</h4>
                                        <h4 className="titulo_pais">- Language native: {language.native}</h4>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};