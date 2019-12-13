import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const list = () => {
    const {pokemons, isLoading} = useContext(PokemonContext);

    console.log(pokemons, isLoading, 'pokemon')
    return ( 
        <div>
            <h1>Pokemon List</h1>
        </div>
     );
}
 
export default list;