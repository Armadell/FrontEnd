import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from '../../axios'
const tokentoserver = localStorage.getItem('access_token');
export const fetchUser=createAsyncThunk('Profile/fetchUser',async()=>{
   
    const response=await axiosInstance.get(`/user/authuser/`,{
        headers: { 'Authorization': `Bearer ${tokentoserver}`,
        'Accept':'application/json',
      'Content-Type':'application/json'
    }
    })
    console.log(response.data[0].user)
    return response.data[0].user
})

const INITIAL_STATE={
    userData:{}
   
}
const cartSlice=createSlice({
    name:"Profile",
    initialState:INITIAL_STATE,
    reducers:{
       
        pushProfileData:(state,action)=>{
   state.userData.push(action.payload)

    },

        
       
    },
    extraReducers:{
        [fetchUser.pending]:(state,action)=>{
      console.log("loading status")
        },
        [fetchUser.fulfilled]:(state,action)=>{
      console.log("success")
      state.userData=action.payload
      console.log(state.userData,"usedaata")
        },
        [fetchUser.rejected]:(state,action)=>{
            state.userData=action.payload
            console.log()
        }
    }
})
export const {getProfileData}=cartSlice.actions;
export default cartSlice.reducer;