import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[],
    totalPrice:0
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.items=[]
            state.totalPrice=0
        },
        addItem:(state, action)=>{
            let add=false
            state.totalPrice +=action.payload?.price
            state.items=state.items?.map((item)=>{
                if(item._id==action.payload._id){
                    item.cartQuantity +=1
                    add=true
                }
                return item
            })
            if(!add){
                state.items.push({...action.payload, cartQuantity:1})
            }
        },
        removeItem:(state,action)=>{
            state.items=state.items?.filter((item)=>{
                if(item._id==action.payload){
                    state.totalPrice -= item.price
                    item.cartQuantity -=1
                    if(item.cartQuantity===0){
                        return false
                    }
                }
                return item
            })
        }
    }
})
export const {clearCart, addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer