import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import overall  from "./slices/overall.js";



export const store = configureStore({
  reducer: {
    generalFunctions: overall ,
  },
    
})