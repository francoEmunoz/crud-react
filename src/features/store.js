import { configureStore } from '@reduxjs/toolkit'
import categoriesAPI from './categoriesAPI'

export const store = configureStore({
    reducer: {
        [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesAPI.middleware)
})