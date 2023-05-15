import React, { useCallback, useRef, useState } from 'react'
import PokemonGrid from '../../Components/PokemonGrid/Component'

import useFavoriteSearch from '../../Utils/hooks/useFavoritesSearch'
import { Box, Typography } from '@mui/material'
import PageWrapper from '../../Components/Layout/PageWrapper/Component'

const Favorites: React.FC = () => {
    const [offset, setOffset] = useState(0)

    const { favorites, loading, hasMore } = useFavoriteSearch({ offset })

    const observer = useRef<IntersectionObserver>()

    const lastPokemonElementRef = useCallback(
        (node: Element) => {
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

    if (favorites.length === 0) {
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
                        No favorites found
                    </Typography>
                </Box>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <PokemonGrid pokemons={favorites} favoritePage={true} lastPokemonElementRef={lastPokemonElementRef} />
        </PageWrapper>
    )
}

export default Favorites
