import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../../Utils/utils";

export const fetchPosts = createAsyncThunk("Posts/fetchPosts", async () => {
  const result = await apiRequest(
    "get",
    "api/contentPost/getAllContentPosts",
    null,
    null
  );

  return result;
});

const initialState = {
  Content: [],
  loading: false,
  error: null,
};

const allPostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    HomeResetOption: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.Content = action.payload.data.Content;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { HomeResetOption } = allPostsSlice.actions;
export default allPostsSlice.reducer;
