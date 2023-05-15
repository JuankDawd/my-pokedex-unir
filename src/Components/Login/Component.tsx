import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, Link, OutlinedInput, Typography } from '@mui/material'
import { useState } from 'react'

interface LoginProps {
    handleLogin: (_n: any) => void
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [showPassword, setShowPassword] = useState(false)

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handlePasswordChange = (event: any) => setPassword(event.target.value)
    const handleUsernameChange = (event: any) => setUsername(event.target.value)

    const handleLogIn = (): boolean => {
        return password !== '' && username !== ''
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
                    onChange={handleUsernameChange}
                    value={username}
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
                    onChange={handlePasswordChange}
                    value={password}
                    endAdornment={
                        <IconButton onClick={handleShowPassword} size="small">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    }
                    type={showPassword ? 'text' : 'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: 'auto' }} variant="outlined" onClick={() => handleLogIn()}>
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
