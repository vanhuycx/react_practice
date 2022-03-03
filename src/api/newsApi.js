import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://van-google-news.herokuapp.com/'

export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder)=> ({
        getNews: builder.query({
            query:({searchTerm})=> ({url:`${searchTerm}`})
        })
    }),
    //   prepareHeaders: (headers, { getState }) => {
    //     headers.set('Access-Control-Allow-Origin', '*')
    //     return headers
    // }
  
})


export const {
    useGetNewsQuery,
} = newsApi
