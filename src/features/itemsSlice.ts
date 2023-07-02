import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateTypes = {
  data: any;
};

const initialState: initialStateTypes = {
  data: [],
};

export const fetchItems = createAsyncThunk("item/fetchItems", () => {
  const token = localStorage.getItem("token");
  return axios
    .get("https://mern-backend-thmt.onrender.com/api/item", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {});
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
      }
    );
    builder.addCase(fetchItems.rejected, (state, action) => {});
  },
});

export default itemsSlice.reducer;
