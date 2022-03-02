import { configureStore } from "@reduxjs/toolkit";
import { fearGreedApi } from "./fearGreedApi";
import { newsApi } from "./newsApi";

export default configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        [fearGreedApi.reducerPath]: fearGreedApi.reducer,
    },
})