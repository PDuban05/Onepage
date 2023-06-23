

import { configureStore } from "@reduxjs/toolkit";


import UpdateReducer from '../features/lenguaje/IdiomaSlice'

export const store = configureStore({
    reducer: {

        language: UpdateReducer,

    },
});