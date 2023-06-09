import { CircularProgress, Grid, OutlinedInput } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Search } from '@mui/icons-material'
import './Component.scss'
interface SearchInputProps {
    onChange: (_n: any) => void
}

const OutlinedInputStyled = styled(OutlinedInput)(({ theme }) => ({
    '& .MuiOutlinedInput-input': {
        padding: theme.spacing(0.75, 1, 0.75, 1),
    },
    borderRadius: 4,
}))

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
    const inputRef = useRef(null)
    const [search, setSearch] = useState('')
    const [adornment, setAdornment] = useState(<Search fontSize="large" color="disabled" />)

    useEffect(() => {
        setAdornment(<CircularProgress size={16} />)

        const searchLowerCase = search.toLowerCase()

        const timmer = setTimeout(() => {
            setAdornment(<Search fontSize="large" color="disabled" />)
            onChange(searchLowerCase)
        }, 500)
        return () => clearTimeout(timmer)
    }, [search])

    const handleChange = (event: any): void => setSearch(event.target.value)

    return (
        <Grid container justifyContent="flex-start" style={{ width: 'auto' }}>
            <Grid
                item
                style={{
                    display: 'block',
                    flexGrow: 1,
                }}
            >
                <OutlinedInputStyled
                    ref={inputRef}
                    style={{
                        transition: 'width 250ms',
                        width: '100%',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: 24,
                    }}
                    margin="dense"
                    onChange={handleChange}
                    startAdornment={adornment}
                    placeholder="Buscar"
                />
            </Grid>
        </Grid>
    )
}

export default SearchInput
