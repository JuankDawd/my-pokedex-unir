import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import './Component.scss'
import { Favorite } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { PokemonInterface } from '../../Utils/interfaces/pokemon.interface'
import { addFavorite, getFavorites, removeFavorite } from '../../Utils/services/favoriteSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonImage } from '../../Utils'
import { PageWrapper } from '..'

interface PokemonGridProps {
    pokemons: PokemonInterface[]
}

const PokemonFiltered: React.FC<PokemonGridProps> = ({ pokemons }) => {
    const navigate = useNavigate()
    const favorites = useSelector(getFavorites)
    const dispatch = useDispatch()
    const handleFavoriteChange = (pokemon: PokemonInterface): void => {
        if (pokemon) {
            if (!favorites.includes(pokemon)) {
                dispatch(addFavorite(pokemon))
            } else {
                dispatch(removeFavorite(pokemon))
            }
        }
    }

    const isFavorite = (pokemon: PokemonInterface): boolean => {
        return favorites.includes(pokemon)
    }

    const goToPokemon = (pokemon: PokemonInterface): void => navigate(`/pokemon/${pokemon.name}`)

    if (pokemons.length === 0) {
        return (
            <PageWrapper>
                <Box
                    minHeight="60vh"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F5F5F5',
                        height: '60vh',
                        width: '60vw',
                        borderRadius: 2,
                    }}
                    maxWidth="sm"
                >
                    <Typography variant="h4" component="h4" align="center">
                        No pokemon found
                    </Typography>
                </Box>
            </PageWrapper>
        )
    }

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
                        backgroundColor: '#F5F5F5',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            width: '100%',

                            color: '#000000',
                            fontWeight: 'bold',
                            padding: '16px 0px 16px 16px',

                            backgroundColor: '#F5F5F5',

                            borderRadius: '8px 8px 0px 0px',

                            borderBottom: '1px solid #E0E0E0',
                        }}
                    >
                        {'Resultados'}
                    </Typography>
                </Grid>

                {pokemons.map((pokemon, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                            '&:hover': {
                                backgroundColor: '#E5E5E5',
                            },
                        }}
                    >
                        <IconButton
                            sx={{
                                width: '5%',
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                color: isFavorite(pokemon) ? '#FF0000' : '#000000',
                            }}
                            onClick={(): void => handleFavoriteChange(pokemon)}
                        >
                            <Favorite />
                        </IconButton>
                        <Avatar
                            variant="rounded"
                            src={getPokemonImage(pokemon.url)}
                            alt={pokemon['name']}
                            sx={{
                                width: '25%',
                                height: 'auto',
                            }}
                        />

                        <Typography
                            sx={{
                                width: '75%',
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                        >
                            {pokemon['name']}
                        </Typography>
                        <Button
                            sx={{
                                width: '10%',
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                            onClick={(): void => goToPokemon(pokemon)}
                        >
                            Details
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default PokemonFiltered
