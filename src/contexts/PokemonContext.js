import React, { useState, useEffect, createContext } from "react";


export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
          `https://pokemon-go1.p.rapidapi.com/shiny_pokemon.json`,
          {
            method: "GET",
            headers: new Headers({
              "x-rapidapi-host" : "pokemon-go1.p.rapidapi.com",
              "x-rapidapi-key" : "3a960f831cmsh7fdd9f5984315a2p172f4ejsnc7f91fa24b3e"
            })
          }
        )
          .then(res => res.json())
          .then(response => {
            setPokemons(response);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      });


    return ( 
        <PokemonContext.Provider value={{pokemons, isLoading}}>
            {props.children}
        </PokemonContext.Provider>
     );
}
 
export default PokemonContextProvider;