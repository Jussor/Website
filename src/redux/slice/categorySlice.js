import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../../Utils/utils";

export const category = createAsyncThunk("category", async () => {
  const result = await apiRequest("get", "api/category/getAllCategory", null);
  return result;
});
export const getPostsByCategory = createAsyncThunk(
  "getPostsByCategory",
  async (body) => {
    const result = await apiRequest(
      "get",
      `api/contentPost/getCategoryContents/${body}`,
      null
    );
    return result;
  }
);

const initialState = {
  categorySuccess: [],
  categoryLoading: false,
  categoryError: null,
  postsByCategorySuccess: [],
  postsByCategoryLoading: false,
  postsByCategoryError: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryResetOption: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(category.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(category.fulfilled, (state, action) => {
        state.categoryLoading = false;
        state.categorySuccess = action.payload.data.Category;
      })
      .addCase(category.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = action.payload;
      });
    builder
      .addCase(getPostsByCategory.pending, (state) => {
        state.postsByCategoryError = true;
      })
      .addCase(getPostsByCategory.fulfilled, (state, action) => {
        state.postsByCategoryLoading = false;
        state.postsByCategorySuccess = action.payload.data.Content;
      })
      .addCase(getPostsByCategory.rejected, (state, action) => {
        state.postsByCategoryLoading = false;
        state.postsByCategoryError = action.payload;
      });
  },
});

export const { categoryResetOption } = categorySlice.actions;
export default categorySlice.reducer;
