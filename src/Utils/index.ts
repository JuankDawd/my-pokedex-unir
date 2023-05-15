import { UserInterface } from './interfaces/user.interface'
import { v4 as uuidv4 } from 'uuid'

const getPokemonId = (url: string): number => +url.split('/')[6]

const getPokemonImage = (url: string): string => {
    const id = getPokemonId(url)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

const handleTypeColor = (type: string): string => {
    switch (type) {
        case 'normal':
            return '#A8A77A'
        case 'fire':
            return '#EE8130'
        case 'water':
            return '#6390F0'
        case 'electric':
            return '#F7D02C'
        case 'grass':
            return '#7AC74C'
        case 'ice':
            return '#96D9D6'
        case 'fighting':
            return '#C22E28'
        case 'poison':
            return '#A33EA1'
        case 'ground':
            return '#E2BF65'
        case 'flying':
            return '#A98FF3'
        case 'psychic':
            return '#F95587'
        case 'bug':
            return '#A6B91A'
        case 'rock':
            return '#B6A136'
        case 'ghost':
            return '#735797'
        case 'dragon':
            return '#6F35FC'
        case 'dark':
            return '#705746'
        case 'steel':
            return '#B7B7CE'
        case 'fairy':
            return '#D685AD'
        default:
            return '#000'
    }
}

export const mockedUsers: UserInterface[] = [
    {
        username: 'john.doe',
        password: 'password1',
        uuid: uuidv4(),
    },
    {
        username: 'jane.doe',
        password: 'password2',
        uuid: uuidv4(),
    },
    {
        username: 'michael.johnson',
        password: 'password3',
        uuid: uuidv4(),
    },
    {
        username: 'samantha.smith',
        password: 'password4',
        uuid: uuidv4(),
    },
    {
        username: 'emily_jackson',
        password: 'passw0rd',
        uuid: uuidv4(),
    },
]

export { getPokemonImage, handleTypeColor, uuidv4 }
