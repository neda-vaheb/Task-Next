import { createSlice } from "@reduxjs/toolkit";
import stat from "daisyui/components/stat";

const initialState = {
    selectedUser:null,
    isOpen:false,

};
const userSlice =createSlice({
    name:"users",
    initialState,
    reducers:{
        selectUser:(state,action)=>{
            state.selectedUser = action.payload;
            state.isOpen=true;
        },
        close:(state)=>{
            state.isOpen=false;
        }
    }
})

export default userSlice.reducer;
export const {selectUser , close} = userSlice.actions;