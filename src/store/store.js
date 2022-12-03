import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "./home/homeSlice";
import shortenLinksSlice from "./shortenLinks/shortenLinksSlice";

export const store = configureStore({
    reducer: {
        home : homeSlice,
        links : shortenLinksSlice
    },
})