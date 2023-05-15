import React, { Fragment } from 'react'
import { PokemonInterface } from '../../../Utils/interfaces/pokemon.interface'
import { ListItem } from '../ListItem'

interface ListWrapperProps {
    pokemons: PokemonInterface[]
    lastPokemonElementRef: (_node: any) => void
}
const ListWrapper: React.FC<ListWrapperProps> = ({ pokemons, lastPokemonElementRef }) => {
    const handleListLength = (pokemonList: PokemonInterface[]): number => pokemonList.length
    return (
        <Fragment>
            {pokemons.map((pokemon, index) => (
                <ListItem
                    key={index}
                    index={index}
                    pokemon={pokemon}
                    length={handleListLength(pokemons)}
                    lastPokemonElementRef={lastPokemonElementRef}
                />
            ))}
        </Fragment>
    )
}

export default ListWrapper
