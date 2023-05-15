import { Container } from '@mui/material'
import { useState } from 'react'
import { PokedexToolbar } from '../../PokedexToolbar'
import { PokemonInterface } from '../../../Utils/interfaces/pokemon.interface'
import { PokemonFiltered } from '../../PokemonFiltered'
import { useSelector } from 'react-redux'
import { getPokemons } from '../../../Utils/services/pokemonSlice'

interface PageWrapperProps {
    children: JSX.Element | JSX.Element[]
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    const pokemonList = useSelector(getPokemons)
    const [pokemonsFiltered, setPokemonsFiltered] = useState<PokemonInterface[]>([])
    const [search, setSearch] = useState('')
    const handleChangeSearch = (search: string): void => {
        const filteredArr = pokemonList.filter((pokemon) => pokemon.name.includes(search))

        if (search === '') {
            setPokemonsFiltered([])
            setSearch('')
        } else {
            setPokemonsFiltered(filteredArr)
            setSearch(search)
        }
    }
    return (
        <Container sx={{ width: '100%' }}>
            <PokedexToolbar onChange={handleChangeSearch} />
            {search === '' ? children : <PokemonFiltered pokemons={pokemonsFiltered} />}
        </Container>
    )
}

export default PageWrapper
