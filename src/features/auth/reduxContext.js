import { createSlice  } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:
        {
            token:null,
            userId :null
        },
    reducers:{
        setUser(state , action){
            const {accessToken} = action.payload
            state.token = accessToken
        }, 
        setUserId(state , action){
            const {userId} = action.payload
            state.userId = userId
        },
        logout(state , action ){
            state.token = null
            state.userId = null
        }
    }
})

export const selectUser = (state) => state.auth.token
export const selectUserId = (state) => state.auth.userId

export const {setUser , logout , setUserId} = authSlice.actions

export default authSlice.reducer