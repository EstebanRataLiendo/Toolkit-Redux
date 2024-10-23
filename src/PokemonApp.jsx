import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, pokemonSlice } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const {isLoading, pokemons = [], page} = useSelector( state => state.pokemons )

  useEffect(() => {
    dispatch( getPokemons(38.6) );
  },[])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'true': 'false'} </span>
        <ul>
          { pokemons.map( ({name}) => (
            <li key={name}> {name} </li>
          ) ) }
        </ul>
        <button 
          className="btn btn-primary"
          disabled= { isLoading}
          onClick={() => dispatch( getPokemons(page) ) }
        >Proximo</button> 
    </>
  )
}
