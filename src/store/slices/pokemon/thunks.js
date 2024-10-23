import { pokemonApi } from "../../../api/PokemonsApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState) => {
        dispatch( startLoadingPokemons() );

        // TODO: realiza la petición http://

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();

        //reemplazamos las ultimas dos lineas de arriba por un complemento que instalamos "npm install axios"
        const {data} = await pokemonApi(`/pokemon?limit=10&offset=${page * 10}`)
        // console.log(data)

        
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}