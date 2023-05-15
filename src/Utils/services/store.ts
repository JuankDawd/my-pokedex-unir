import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer, { FavoriteStoreInterface } from './favoriteSlice'
import pokemonReducer, { PokemonStoreInterface } from './pokemonSlice'
import userSlice, { UserStoreInterface } from './userSlice'

export interface StoreInterface {
    favorite: FavoriteStoreInterface
    pokemon: PokemonStoreInterface
    user: UserStoreInterface
}
const store = configureStore({
    reducer: {
        // Add your reducers here
        favorite: favoriteReducer,
        pokemon: pokemonReducer,
        user: userSlice,
    },
})

export default store
