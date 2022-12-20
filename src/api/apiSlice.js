import {fetchBaseQuery , createApi} from '@reduxjs/toolkit/query/react'
import { setUser } from '../features/auth/reduxContext'

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:3500',
    credentials:"include",
    prepareHeaders:(headers , {getState})=>{
        const token = getState().auth.token

        if (token) headers.set('authorization',`Bearer ${token}`)

        return headers
    }
})

const baseQueryWithReAuth = async (args , api , extraOptions)=>{
    /* console.log(args); console.log(api); console.log(extraOptions); */

    let result = await baseQuery(args , api , extraOptions) 
/*     console.log(result); */
    if(result?.error?.status === 403){
        console.log("sending refresh token...");


    const refreshResult = await baseQuery("/refresh" , api , extraOptions)

    if(refreshResult?.data){
        api.dispatch(setUser({...refreshResult.data}))
        result = await baseQuery(args , api , extraOptions)
    }else{
        if(refreshResult?.error?.status === 403){
            refreshResult.error.data.message = "your login has expired! "
        }
        return refreshResult
    }

    }
    return result
}

export const apiSlice = createApi({
    baseQuery :baseQueryWithReAuth,
    tagTypes:["User" , "Movie"],
    endpoints:builder => ({})
}) 