import { useState } from 'react'
import { Login, PageWrapper, Register, SessionWrapper } from '../../Components'
import { Container } from '@mui/material'

const Session: React.FC = () => {
    const [login, setLogin] = useState(false)

    const handleLogin = (): void => setLogin(!login)

    const handleTitle = (): string => (login ? 'Login' : 'Register')
    return (
        <PageWrapper>
            <SessionWrapper title={handleTitle()}>
                <Container maxWidth="md" sx={{ width: '100vw', backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '10px 0 10px 0' }}>
                    {login ? <Login handleLogin={handleLogin} /> : <Register handleLogin={handleLogin} />}
                </Container>
            </SessionWrapper>
        </PageWrapper>
    )
}

export default Session
