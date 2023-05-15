import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, Link, OutlinedInput, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserId } from '../../Utils/services/userSlice'

interface LoginProps {
    handleLogin: (_n: any) => void
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [showPassword, setShowPassword] = useState(false)

    const username = 'JuanDawd'
    // eslint-disable-next-line react-redux/useSelector-prefer-selectors
    const userId = useSelector((state: any) => getUserId(state, username))
    const [user, setUser] = useState({
        username: '',
        password: '',
    })
    useEffect(() => {
        console.log(userId)
    }, [])

    const handleUserChange = ({ key, event }: { key: string; event: any }): void => {
        setUser((user) => ({ ...user, [key]: event.target.value }))
    }

    const getUsername = () => {
        console.log({ msg: 'Out Of Slices', username })
    }

    const handleShowPassword = () => setShowPassword((showPassword) => !showPassword)
    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                sx={{
                    width: '100%',
                }}
            >
                <OutlinedInput
                    sx={{ width: '100%', height: 'auto' }}
                    placeholder={'Username'}
                    margin="dense"
                    onChange={(e) => handleUserChange({ key: 'username', event: e })}
                    value={user.username}
                    type={'text'}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    width: '100%',
                }}
            >
                <OutlinedInput
                    sx={{ width: '100%', height: 'auto' }}
                    placeholder={'Password'}
                    margin="dense"
                    onChange={(e) => handleUserChange({ key: 'password', event: e })}
                    value={user.password}
                    endAdornment={
                        <IconButton onClick={handleShowPassword} size="small">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    }
                    type={showPassword ? 'text' : 'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: 'auto' }} variant="outlined" onClick={() => getUsername()}>
                    <Typography variant="body1">Log In</Typography>
                </Button>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    width: '100%',
                }}
            >
                <Typography variant="subtitle1">
                    <Link onClick={handleLogin} variant="h6" sx={{ width: '100%' }}>
                        Not a User? Register
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login
