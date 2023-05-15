import React from 'react'
import { Container } from '@mui/material'

import { PokemonInterface } from '../../Utils/interfaces/pokemon.interface'
import './Component.scss'
import { ListWrapper } from '..'
interface PokemonGridProps {
    pokemons: PokemonInterface[]
    favoritePage: boolean
    lastPokemonElementRef: (_node: any) => void
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons, favoritePage, lastPokemonElementRef }) => {
    const handleTitle = (favoritePage: boolean): string => (!favoritePage ? 'Pokemons List' : 'Favorites')
    return (
        <Container
            maxWidth="md"
            sx={{
                width: '100vw',

                backgroundColor: '#F5F5F5',
                borderRadius: '8px',
            }}
        >
            <ListWrapper pokemons={pokemons} title={handleTitle(favoritePage)} lastPokemonElementRef={lastPokemonElementRef} />
        </Container>
    )
}

export default PokemonGrid
