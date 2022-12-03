import {createSlice} from '@reduxjs/toolkit';
import {onLinkAdded, setError} from "./shortenLinksActions";

export const shortenLinksSlice = createSlice({

    name: 'links',

    initialState: {
        links: [],
        error:''
    },

    reducers: {
        setAllLinks: (state,action) => {
            state.links = action.payload
        },
    },

    extraReducers: (builder) => {

        builder

            .addCase(setError, (state, action) => {
                state.error = action.payload
            })

            .addCase(onLinkAdded.fulfilled, (state, action) => {
                state.links = [...state.links,action.payload]
            })

    }

})

export const { setAllLinks } = shortenLinksSlice.actions
export default shortenLinksSlice.reducer