import React, { useCallback, useRef, useState } from 'react'

import usePokemonSearch from '../../Utils/hooks/usePokemonSearch'
import PageWrapper from '../../Components/Layout/PageWrapper/Component'
import PokemonGrid from '../../Components/PokemonGrid/Component'

const Home: React.FC = () => {
    const [offset, setOffset] = useState(0)
    const { pokemons, loading, hasMore } = usePokemonSearch({ offset })

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
        <PageWrapper>
            <PokemonGrid pokemons={pokemons} favoritePage={false} lastPokemonElementRef={lastPokemonElementRef} />
        </PageWrapper>
    )
}

export default Home
