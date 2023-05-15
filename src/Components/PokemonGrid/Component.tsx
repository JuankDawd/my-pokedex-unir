import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

import { PokemonInterface } from '../../Utils/interfaces/pokemon.interface'
import { ListWrapper } from '..'

import './Component.scss'
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
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            width: '100%',
                            fontWeight: 'bold',

                            padding: '16px 0px 16px 16px',
                            borderRadius: '8px 8px 0px 0px',
                            borderBottom: '1px solid #E0E0E0',
                        }}
                    >
                        {handleTitle(favoritePage)}
                    </Typography>
                </Grid>
                <ListWrapper pokemons={pokemons} lastPokemonElementRef={lastPokemonElementRef} />
            </Grid>
        </Container>
    )
}

export default PokemonGrid
