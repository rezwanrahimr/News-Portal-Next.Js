// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getNewsApi } from "./api/api";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        [getNewsApi.reducerPath]: getNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getNewsApi.middleware),
})

// setupListeners(store.dispatch);