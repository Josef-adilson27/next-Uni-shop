import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const detail = createAsyncThunk("getDetails", async (param) => {
  const res = await fetch(
    `http://localhost:3000/api/details?category=${param.category}&id=${param.id}`)
    return res.json();
});
const initialState = {
  value: [],
  data: [],
  localStor:{
    viewedCars:[]
  }
};

export const overall = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    addViewedCarsToRedux:(state,action)=>{
      state.localStor.viewedCars = action.payload
    }
  },
  extraReducers: (builder) => {
   
  },
});

export const {addViewedCarsToRedux} = overall.actions;

export default overall.reducer;
