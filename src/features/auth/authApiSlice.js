import { apiSlice } from "../../api/apiSlice";
import { logout , setUser } from "./reduxContext";



export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        Login:builder.mutation({
            query: credentials=>({
                url:"/login",
                method:"POST",
                body:{...credentials}
            })
        }),
        register: builder.mutation({
            query: credentials =>({
                url:"/register",
                method:"POST",
                body:{...credentials}
            })
        }),
        sendLogOut: builder.mutation({
            query:()=>({
                url:"/logout",
                method:"POST",
            }),
            async onQueryStarted(arg , {dispatch , queryFulfilled}){
                console.log('logout');
                try {
                    await queryFulfilled
                    dispatch(logout())
                    dispatch(apiSlice.util.resetApiState())                    
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        refresh:builder.mutation({
            query:() =>({
                url:"/refresh",
                method:"GET"
            }),
            async onQueryStarted(arg , {dispatch , queryFulfilled}){
                console.log('refresh');
                try {
                    const {data} = await queryFulfilled
                    const {accessToken} = data
                    dispatch(setUser({accessToken}))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
    })
})

export const {useLoginMutation , useRegisterMutation, useSendLogOutMutation , useRefreshMutation} = authApiSlice