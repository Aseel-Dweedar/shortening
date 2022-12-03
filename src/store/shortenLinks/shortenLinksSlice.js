import {createSlice} from '@reduxjs/toolkit'

export const shortenLinksSlice = createSlice({

    name: 'links',

    initialState: {
        links: [],
    },

    reducers: {
        addLink: (state, action) => {
            state.links = [...state.links, action.payload]
        },
    }

})

export const {addLink} = shortenLinksSlice.actions
export default shortenLinksSlice.reducer