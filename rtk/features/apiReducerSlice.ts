import {createApi,fetchBaseQuery} from"@reduxjs/toolkit/query/react";



export const productApiInjectEndpoint =createApi({
    reducerPath:"productApiInjectEndpoint",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000/"}),
    endpoints : (builder) => ({
        getProducts : builder.query({
            query: (arg) => "products"
        }),
        getFilteredProducts : builder.query({
            query: (arg) => `products?tag=${arg}`
        }),
        getOrders : builder.query({
            query: (arg) => `orders`
        }),
        addOrder : builder.mutation({
            query: (body) => ({
                url:'orders',
                method:"POST",
                body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
    })
})


export const {useGetProductsQuery,useGetFilteredProductsQuery,useGetOrdersQuery,useAddOrderMutation} = productApiInjectEndpoint;