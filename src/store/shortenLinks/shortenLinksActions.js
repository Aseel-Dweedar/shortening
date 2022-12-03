import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {createShortenLink} from "../../api";

export const setError = createAction('SET_ERROR')

export const onLinkAdded = createAsyncThunk(
    'onLinkAdded',
    async (payload, thunkAPI) => {
        try {
            let {data} = await createShortenLink(payload)
            return {original: payload, shorten: data.result.full_short_link};
        } catch (error) {
            thunkAPI.dispatch(setError(error?.response?.data?.error))
        }
        return []
    }
)