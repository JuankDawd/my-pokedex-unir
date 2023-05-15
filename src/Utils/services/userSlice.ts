import { createSlice } from '@reduxjs/toolkit'

import { UserInterface } from '../interfaces/user.interface'
import { StoreInterface } from './store'

export interface UserStoreInterface {
    user: UserInterface
}

const initialState: UserStoreInterface = {
    user: { uuid: '', username: '', password: '' },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },

        logout: (state) => {
            state.user = initialState.user
        },
    },
})

export const { login, logout } = userSlice.actions

export const getusername = (state: StoreInterface): string => {
    return state.user.user.username
}

export default userSlice.reducer
