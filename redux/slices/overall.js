import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const detail = createAsyncThunk("getDetails", async (param) => {
  const res = await fetch(
    `http://localhost:3000/api/details?category=${param.category}&id=${param.id}`)
    return res.json();
});
const initialState = {
  value: [],
  data: [],
  isLoading: false,
};

export const overall = createSlice({
  name: "searchbar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(detail.fulfilled,(state, action) => {
      state.data = action.payload
    });
  },
});

export const {} = overall.actions;

export default overall.reducer;
