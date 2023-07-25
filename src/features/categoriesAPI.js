import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api_url from "../api";
export const categoriesAPI = createApi({
    reducerPath: 'categoriesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${api_url}`
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/`
        }),
        createCategory: builder.mutation({
            query(body) {
                return {
                    url: "/",
                    method: "POST",
                    body: body,
                    
                };
            },
        }),
        editCategory: builder.mutation({
            query: (body) => ({
                url: `/${body.CategoryID}`,
                method: 'PUT',
                body: body,
            })
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                
            })
        })
    })
})
export default categoriesAPI
export const { useGetCategoriesQuery, useDeleteCategoryMutation, useEditCategoryMutation, useCreateCategoryMutation } = categoriesAPI