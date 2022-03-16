import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://api.coingecko.com/api/v3'

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder)=> ({
        getCrypto: builder.query({
            query:({price_change_percentage})=> ({url:`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=${price_change_percentage}`})
            // 1h%2C24h%2C7d
        })
    }),
    //   prepareHeaders: (headers, { getState }) => {
    //     headers.set('Access-Control-Allow-Origin', '*')
    //     return headers
    // }
  
})


export const {
    useGetCryptoQuery,
} = cryptoApi
