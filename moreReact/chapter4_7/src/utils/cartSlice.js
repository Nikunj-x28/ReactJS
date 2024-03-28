import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:'cart',
        initialState:{
            items:[]
        },
// an object where each key-value pair represents an action and its corresponding reducer function. 
        reducers:{
            addItem:(state,action)=>{
                       state.items.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.items.pop();
            },
            clearCart:(state,action)=>{ //no need to write action here tbh
                state.items.length=0;
            }
        }
    }
)

export const {addItem,removeItem,clearCart}= cartSlice.actions;

export default cartSlice.reducer; 