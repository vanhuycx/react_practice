import { configureStore } from "@reduxjs/toolkit";
import { fearGreedApi } from "./api";


export default configureStore({
    reducer: {
        [fearGreedApi.reducerPath]: fearGreedApi.reducer,
    },
})