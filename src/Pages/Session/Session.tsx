import { useState } from 'react'
import { Login, PageWrapper, Register, SessionWrapper } from '../../Components'
import { Container, Snackbar } from '@mui/material'

const Session: React.FC = () => {
    const [login, setLogin] = useState(false)
    const [error, setError] = useState('')
    const handleLogin = (): void => setLogin(!login)
    const handleErrors = (message: string): void => setError(message)

    const handleTitle = (): string => (login ? 'Login' : 'Register')
    return (
        <PageWrapper>
            <SessionWrapper title={handleTitle()}>
                <Container maxWidth="md" sx={{ width: '100vw', backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '10px 0 10px 0' }}>
                    {login ? <Login handleLogin={handleLogin} /> : <Register handleLogin={handleLogin} handleError={handleErrors} />}
                    <Snackbar
                        open={error !== ''}
                        autoHideDuration={6000}
                        onClose={(): void => setError('')}
                        message={error}
                        sx={{
                            width: '100%',
                            '& .MuiSnackbarContent-root': {
                                backgroundColor: '#f44336',
                                color: '#fff',
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            },
                        }}
                    />
                </Container>
            </SessionWrapper>
        </PageWrapper>
    )
}

export default Session
