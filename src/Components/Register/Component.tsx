import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, Link, OutlinedInput, Typography } from '@mui/material'
import { useState } from 'react'
import { AuthController } from '../../Utils/API/Controllers/Auth.Controller'
import { uuidv4 } from '../../Utils'

interface RegisterProps {
    handleLogin: (_n: any) => void
    handlePopUp: (_n: string, _a: string) => void
}

const Register: React.FC<RegisterProps> = ({ handleLogin, handlePopUp }) => {
    const [showPasswords, setShowPasswords] = useState({
        password: false,
        passwordConfirmation: false,
    })
    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
    })

    const handleShowPassword = ({ key, value }: { key: string; value: boolean }): void => {
        setShowPasswords((showPasswords) => ({ ...showPasswords, [key]: !value }))
    }

    const handleUserChange = ({ key, event }: { key: string; event: any }): void => {
        setUser((user) => ({ ...user, [key]: event.target.value }))
    }

    const handlePasswordValidation = (): boolean => {
        return user.password === user.passwordConfirmation
    }

    const handleEmptyFields = (): boolean => {
        return user.username !== '' && user.password !== '' && user.passwordConfirmation !== ''
    }

    const handleOnSubmit = (): void => {
        const passVal = handlePasswordValidation()
        const emptyFields = handleEmptyFields()
        if (!passVal) handlePopUp('The passwords dont match', 'Fail')
        if (!emptyFields) handlePopUp('There is a empty field', 'Fail')

        if (passVal && emptyFields) {
            const { ['passwordConfirmation']: _, ...userReg } = user
            const userFormed = { ...userReg, uuid: uuidv4() }
            // Later
            const [message, header] = AuthController.register(userFormed)
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
                {/* { key: 'password', value: showPasswords.password } */}
                <OutlinedInput
                    sx={{ width: '100%', height: 'auto' }}
                    placeholder={'Password'}
                    margin="dense"
                    onChange={(e) => handleUserChange({ key: 'password', event: e })}
                    value={user.password}
                    endAdornment={
                        <IconButton onClick={() => handleShowPassword({ key: 'password', value: showPasswords.password })} size="small">
                            {showPasswords.password ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    }
                    type={showPasswords.password ? 'text' : 'password'}
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
                    onChange={(e) => handleUserChange({ key: 'passwordConfirmation', event: e })}
                    value={user.passwordConfirmation}
                    endAdornment={
                        <IconButton
                            onClick={() => handleShowPassword({ key: 'passwordConfirmation', value: showPasswords.passwordConfirmation })}
                            size="small"
                        >
                            {showPasswords.passwordConfirmation ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    }
                    type={showPasswords.passwordConfirmation ? 'text' : 'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: 'auto' }} variant="outlined" onClick={() => handleOnSubmit()}>
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
