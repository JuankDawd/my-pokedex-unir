import { createSlice } from '@reduxjs/toolkit'
import { PokemonInterface } from '../interfaces/pokemon.interface'

export interface PokemonStoreInterface {
    pokemons: PokemonInterface[]
}

const initialState: PokemonStoreInterface = {
    pokemons: [],
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemons: (state, action) => {
            state.pokemons = action.payload
        },
    },
})

export const { addPokemons } = pokemonSlice.actions

export const getPokemons = (state: any): PokemonInterface[] => state.pokemon.pokemons

export default pokemonSlice.reducer
