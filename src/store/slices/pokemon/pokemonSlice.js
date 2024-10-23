import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page:0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        }
    }
});
export const { increment} = pokemonSlice.actions