import { Grid, Typography } from '@mui/material'

import { PokemonInterface } from '../../../Utils/interfaces/pokemon.interface'
import { ListItem } from '../ListItem'

interface ListWrapperProps {
    title: string
    pokemons: PokemonInterface[]
    lastPokemonElementRef: (_node: any) => void
}
const ListWrapper: React.FC<ListWrapperProps> = ({ title, pokemons, lastPokemonElementRef }) => {
    const handleListLength = (pokemonList: PokemonInterface[]): number => pokemonList.length
    return (
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
                    {title}
                </Typography>
            </Grid>

            {pokemons.map((pokemon, index) => (
                <ListItem
                    key={index}
                    index={index}
                    pokemon={pokemon}
                    length={handleListLength(pokemons)}
                    lastPokemonElementRef={lastPokemonElementRef}
                />
            ))}
        </Grid>
    )
}

export default ListWrapper
