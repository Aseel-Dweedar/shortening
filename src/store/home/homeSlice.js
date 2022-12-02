import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({

    name: 'home',

    initialState: {
        screenWidth: 0,
    },

    reducers: {
        resize: (state,action) => {
            state.screenWidth = action.payload
        },
    }

})

export const { resize } = homeSlice.actions
export default homeSlice.reducer