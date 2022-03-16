import { configureStore } from "@reduxjs/toolkit";
import { fearGreedApi } from "./fearGreedApi";
import { newsApi } from "./newsApi";
import {cryptoApi} from './cryptoApi'


export default configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        [fearGreedApi.reducerPath]: fearGreedApi.reducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,

    },
})