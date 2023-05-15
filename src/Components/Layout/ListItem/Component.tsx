import { Favorite } from '@mui/icons-material'
import { Grid, IconButton, Avatar, Typography, Button } from '@mui/material'

import { getPokemonImage } from '../../../Utils'
import { PokemonInterface } from '../../../Utils/interfaces/pokemon.interface'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, getFavorites, removeFavorite } from '../../../Utils/services/favoriteSlice'
import { useNavigate } from 'react-router-dom'
interface ListItemProps {
    index: number
    pokemon: PokemonInterface
    length: number
    lastPokemonElementRef: (_node: any) => void
}

const ListItem: React.FC<ListItemProps> = ({ index, pokemon, length, lastPokemonElementRef }) => {
    const navigate = useNavigate()
    const goToPokemon = (pokemon: PokemonInterface): void => navigate(`/pokemon/${pokemon.name}`)

    const dispatch = useDispatch()
    const favorites = useSelector(getFavorites)

    const isFavorite = (pokemon: PokemonInterface): boolean => {
        return favorites.includes(pokemon)
    }

    const handleFavoriteChange = (pokemon: PokemonInterface): void => {
        if (pokemon) {
            if (!favorites.includes(pokemon)) {
                dispatch(addFavorite(pokemon))
            } else {
                dispatch(removeFavorite(pokemon))
            }
        }
    }

    const handlePokemonRef = () => (index + 1 === length ? lastPokemonElementRef : null)

    return (
        <Grid
            ref={handlePokemonRef()}
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
    )
}

export default ListItem
