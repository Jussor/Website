import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../../Utils/utils";


export const DetailPost = createAsyncThunk(
  "getPostsByCategory",
  async (body) => {
    const result = await apiRequest(
      "get",
      `api/contentPost/findContentPostById/${body}`,
      null
    );
    return result;
  }
);

const initialState = {
  Success: {},
  Loading: false,


};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    categoryResetOption: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(DetailPost.pending, (state) => {
        state.Loading = true;
      })
      .addCase(DetailPost.fulfilled, (state, action) => {
        state.Loading = false;
        state.Success = action.payload.data;
      })
   
  },
});

export const { categoryResetOption } = postSlice.actions;
export default postSlice.reducer;
