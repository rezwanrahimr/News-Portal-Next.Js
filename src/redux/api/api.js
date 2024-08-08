import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getNewsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => `news`,
        }),
        getSingleNews: builder.query({
            query: (id) => `news/${id}`,
        })
    }),
})

export const { useGetNewsQuery, useGetSingleNewsQuery } = getNewsApi;
