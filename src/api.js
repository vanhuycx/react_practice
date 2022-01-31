import React from "react";
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers = {'Access-Control-Allow-Origin':'*'}
const baseUrl = 'https://api.alternative.me/'

const createRequest = (url)=> ({url,headers:headers});


export const fearGreedApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder)=>({
        getFearGreedApi: builder.query({
            query: () => createRequest(`/fng?limit=10&date_format=us`)
        })
    })
})

export const {
    useGetFearGreedApiQuery,
} = fearGreedApi;