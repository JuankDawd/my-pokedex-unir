import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../interfaces/user.interface'
import { StoreInterface } from './store'

export interface UserStoreInterface {
    users: UserInterface[]
}

const initialState: UserStoreInterface = {
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload)
        },

        login: (state, action) => {
            const userIndex = state.users.findIndex((user) => user.username === action.payload.username)
            if (userIndex !== -1) {
                state.users[userIndex].loggedIn = true
            }
        },

        logout: (state, action) => {
            state.users[action.payload].loggedIn = false
        },
    },
})

export const { register, login, logout } = userSlice.actions

export const getusername = (state: StoreInterface): string => {
    const userIndex = state.user.users.findIndex((user) => user.loggedIn)

    return state.user.users[userIndex].username
}

export const getUserId = (state: StoreInterface, username: string): number => {
    const userId = state.user.users.findIndex((user) => user.username === username)
    return userId
}

export default userSlice.reducer
