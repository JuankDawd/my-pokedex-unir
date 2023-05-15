import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, Link, OutlinedInput, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Utils/services/userSlice'
import { AuthController } from '../../Utils/API/Controllers/Auth.Controller'

interface LoginProps {
    handleLogin: (_n: any) => void
    handlePopUp: (_n: string, _a: string) => void
}

const Login: React.FC<LoginProps> = ({ handleLogin, handlePopUp }) => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleUserChange = ({ key, event }: { key: string; event: any }): void => {
        setUser((user) => ({ ...user, [key]: event.target.value }))
    }

    const handleShowPassword = () => setShowPassword((showPassword) => !showPassword)

    const handleEmptyFields = (): boolean => {
        return user.username !== '' && user.password !== ''
    }
    const onSubmit = () => {
        const emptyFields = handleEmptyFields()
        if (!emptyFields) handlePopUp('There is atleast a empty field', 'Fail')

        if (emptyFields) {
            const [message, header, uuid] = AuthController.login(user)

            if (uuid) {
                const payload = {
                    ...user,
                    uuid,
                }
                dispatch(login(payload))
            }
            handlePopUp(message, header)
        }
    }
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
                <Button sx={{ width: '100%', height: 'auto' }} variant="outlined" onClick={() => onSubmit()}>
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
