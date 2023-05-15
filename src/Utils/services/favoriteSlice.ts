import { createSlice } from '@reduxjs/toolkit'
import { PokemonInterface } from '../interfaces/pokemon.interface'

export interface FavoriteStoreInterface {
    favorites: PokemonInterface[]
}

const initialState: FavoriteStoreInterface = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter((favorite) => favorite.name !== action.payload.name)
        },
    },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export const getFavorites = (state: any): PokemonInterface[] => state.favorite.favorites

export default favoriteSlice.reducer
