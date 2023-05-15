import { useState } from 'react'
import { Login, PageWrapper, Register, SessionWrapper } from '../../Components'
import { Container, Snackbar } from '@mui/material'

const Session: React.FC = () => {
    const [login, setLogin] = useState(false)
    const [popUpInfo, setPopUpInfo] = useState({
        message: '',
        title: '',
    })
    const handleLogin = (): void => setLogin(!login)
    const handlePopUp = (message: string, title: string): void => setPopUpInfo({ message, title })

    const handleTitle = (): string => (!login ? 'Login' : 'Register')
    return (
        <PageWrapper>
            <SessionWrapper title={handleTitle()}>
                <Container maxWidth="md" sx={{ width: '100vw', backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '10px 0 10px 0' }}>
                    {!login ? (
                        <Login handleLogin={handleLogin} handlePopUp={handlePopUp} />
                    ) : (
                        <Register handleLogin={handleLogin} handlePopUp={handlePopUp} />
                    )}
                    <Snackbar
                        open={popUpInfo.title !== ''}
                        autoHideDuration={6000}
                        onClose={(): void => setPopUpInfo({ message: '', title: '' })}
                        message={popUpInfo.message}
                        sx={{
                            width: '100%',
                            '& .MuiSnackbarContent-root': {
                                backgroundColor: popUpInfo.title === 'Fail' ? '#f44336' : 'GREEN',
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
