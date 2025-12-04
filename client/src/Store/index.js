import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slice/AuthSlice'
import cartSliceReducer from './Slice/CartSlice'
const store=configureStore({
    reducer:{
        auth :authSliceReducer ,
        cart :cartSliceReducer
    }
})
export default store