import { Container, Grid, Typography } from '@mui/material'

interface SessionWrapperProps {
    children: JSX.Element | JSX.Element[]
    title: string
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children, title }) => {
    return (
        <Container maxWidth="md" sx={{ width: '100vw', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            width: '100%',
                            fontWeight: 'bold',

                            padding: '16px 0px 16px 16px',
                            borderRadius: '8px 8px 0px 0px',
                            borderBottom: '1px solid #E0E0E0',
                        }}
                    >
                        {title}
                    </Typography>
                </Grid>

                {children}
            </Grid>
        </Container>
    )
}

export default SessionWrapper
