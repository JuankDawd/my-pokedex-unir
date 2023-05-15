import React, { useCallback, useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import { PokemonFiltered } from '../../Components/PokemonFiltered'
import PokemonGrid from '../../Components/PokemonGrid/Component'
import usePokemonSearch from '../../Utils/hooks/usePokemonSearch'
import { PokemonInterface } from '../../Utils/interfaces/pokemon.interface'
import { getPokemons } from '../../Utils/services/pokemonSlice'
import PageWrapper from '../../Components/Layout/PageWrapper/Component'

const Home: React.FC = () => {
    const [offset, setOffset] = useState(0)
    const { pokemons, loading, hasMore } = usePokemonSearch({ offset })
    const [pokemonsFiltered, setPokemonsFiltered] = useState<PokemonInterface[]>([])
    const [search, setSearch] = useState('')

    const pokemonList = useSelector(getPokemons)

    const observer = useRef<IntersectionObserver>()

    const lastPokemonElementRef = useCallback(
        (node: any) => {
            if (loading) return

            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setOffset((prevOffset) => prevOffset + 10)
                }
            })

            if (node) observer.current.observe(node)
        },
        [loading, hasMore]
    )

    return (
        <PageWrapper pokemonList={pokemonList} onSubmitSearch={setSearch} onSubmitFilters={setPokemonsFiltered}>
            {search === '' ? (
                <PokemonGrid pokemons={pokemons} favoritePage={false} lastPokemonElementRef={lastPokemonElementRef} />
            ) : (
                <PokemonFiltered pokemons={pokemonsFiltered} />
            )}
        </PageWrapper>
    )
}

export default Home
