import {createSlice} from '@reduxjs/toolkit'
const counterSlice=createSlice({
    name:"counter",
    initialState:100,
    reducers:{
        increase:(state,payload)=>{
            console.log(payload)
            return state=state+payload.payload
        },
        decrease:(state,payload)=>{
            console.log(payload)
            return state=state-payload.payload
        }
    }
})
export const {increase}=counterSlice.actions
export const {decrease}=counterSlice.actions
export default counterSlice.reducer