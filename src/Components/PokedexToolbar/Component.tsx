import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import { Favorite, CatchingPokemon, Person } from '@mui/icons-material'
import { Box } from '@mui/system'

import { PATHS } from '../../Utils/Routes'

import { SearchInput } from '..'

import './Component.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getusername } from '../../Utils/services/userSlice'

interface PokedexToolbarProps {
    onChange: (_n: any) => void
}

const PokedexToolbar: React.FC<PokedexToolbarProps> = ({ onChange }) => {
    const username = useSelector(getusername)
    const navigate = useNavigate()

    const goTo = (path: string): void => navigate(path)
    return (
        <Fragment>
            <AppBar color="transparent" elevation={0} position="fixed" sx={{ backgroundColor: 'background.paper' }}>
                <Toolbar disableGutters>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item xs={3}>
                                <Grid
                                    container
                                    alignItems="center"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => goTo(PATHS.HOME)}
                                >
                                    <Grid item sx={{ mr: 1 }}>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                backgroundColor: '#DFDFDF',
                                                width: 40,
                                                height: 40,
                                                fontSize: '10px',
                                            }}
                                        >
                                            <CatchingPokemon sx={{ color: '#FB1B1B' }} />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                fontWeight: 400,
                                                color: '#000',
                                            }}
                                        >
                                            {'My Pokedex - UNIR'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Box sx={{ width: '100%' }}>
                                    <SearchInput onChange={onChange} />
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={() => goTo(PATHS.FAVORITES)} endIcon={<Favorite />}>
                                    <Typography variant="body1">{'Favorites'}</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={() => goTo(PATHS.SESSION)} endIcon={<Person />}>
                                    <Typography variant="body1">{username === '' ? 'Log In' : username}</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Fragment>
    )
}

export default PokedexToolbar
