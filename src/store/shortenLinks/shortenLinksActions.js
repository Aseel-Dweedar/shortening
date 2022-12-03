import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {createShortenLink} from "../../api";

export const setError = createAction('SET_ERROR')

export const onLinkAdded = createAsyncThunk(
    'onLinkAdded',
    async (payload, thunkAPI) => {
        try {
            let {data} = await createShortenLink(payload)
            let allLinks = JSON.parse(sessionStorage.getItem("shortenLinks") || "[]")
            let newLink = {original: payload, shorten: data.result.full_short_link}
            allLinks.push(newLink)
            sessionStorage.setItem("shortenLinks" ,JSON.stringify(allLinks))
            return newLink;
        } catch (error) {
            let message = error?.response?.data?.error?.split(",")[0]
            thunkAPI.dispatch(setError(message))
        }
        return []
    }
)