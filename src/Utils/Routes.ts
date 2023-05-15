import { FunctionComponent } from 'react'
import { Favorites, Home, Pokemon, Session } from '../Pages'

export const PATHS = {
    HOME: '/',
    DETAILED: 'pokemon/:name',
    FAVORITES: '/favorites',
    SESSION: '/session',
}

interface RouteType {
    title: string
    path: string
    component: FunctionComponent
}

export const ROUTES: RouteType[] = [
    {
        title: 'Home',
        path: PATHS.HOME,
        component: Home,
    },
    {
        title: 'Detailed Pokemon',
        path: PATHS.DETAILED,
        component: Pokemon,
    },
    {
        title: 'Favorites',
        path: PATHS.FAVORITES,
        component: Favorites,
    },
    {
        title: 'Session',
        path: PATHS.SESSION,
        component: Session,
    },
]
