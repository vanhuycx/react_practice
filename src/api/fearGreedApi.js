import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://api.alternative.me/ng'

export const fearGreedApi = createApi({
    reducerPath:'fearGreedApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder)=> ({
        getFearGreedIndex: builder.query({
            query:({limit})=> ({url:`?limit=${limit}`})
        })
    }),
    //   prepareHeaders: (headers, { getState }) => {
    //     headers.set('Access-Control-Allow-Origin', '*')
    //     return headers
    // }
  
})


export const {
    useGetFearGreedIndexQuery,
} = fearGreedApi
