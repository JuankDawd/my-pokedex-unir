import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, Link, OutlinedInput, Typography } from '@mui/material'
import { useState } from 'react'

interface RegisterProps {
    handleLogin: (_n: any) => void
}

const Register: React.FC<RegisterProps> = ({ handleLogin }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    // I can User InputRef so i don't need these functions but I don't really mind leaving it like this.
    const handlePasswordChange = (event: any) => setPassword(event.target.value)
    const handlePasswordConfirmationChange = (event: any) => setPasswordConfirmation(event.target.value)
    const handleUsernameChange = (event: any) => setUsername(event.target.value)

    const handleLogIn = (): boolean => {
        return password !== '' && username !== ''
    }

    const handleShowPassword = () => setShowPassword((showPassword) => !showPassword)
    const handleShowPasswordConfirmation = () => setShowPasswordConfirmation((showPasswordConfirmation) => !showPasswordConfirmation)
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
            <Grid
                item
                xs={12}
                sx={{
                    width: '100%',
                }}
            >
                <OutlinedInput
                    sx={{ width: '100%', height: 'auto' }}
                    placeholder={'Password Confirmation'}
                    margin="dense"
                    onChange={handlePasswordConfirmationChange}
                    value={passwordConfirmation}
                    endAdornment={
                        <IconButton onClick={handleShowPasswordConfirmation} size="small">
                            {showPasswordConfirmation ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    }
                    type={showPasswordConfirmation ? 'text' : 'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: 'auto' }} variant="outlined" onClick={() => handleLogIn()}>
                    <Typography variant="body1">Register</Typography>
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
                        Already an User? Log In
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Register
