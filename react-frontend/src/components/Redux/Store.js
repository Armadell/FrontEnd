import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileRedux"
export const store=configureStore({
    reducer:{
   
    cart:profileReducer,
    
    }
},+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
