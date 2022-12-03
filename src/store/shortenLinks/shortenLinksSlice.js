import {createSlice} from '@reduxjs/toolkit';
import {onLinkAdded, setError} from "./shortenLinksActions";

export const shortenLinksSlice = createSlice({

    name: 'links',

    initialState: {
        links: [],
        error:''
    },

    reducers: {},

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

export default shortenLinksSlice.reducer