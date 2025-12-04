import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slice/AuthSlice'
const store=configureStore({
    reducer:{
        auth :authSliceReducer
    }
})
export default store