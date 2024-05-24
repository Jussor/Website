import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "../../Utils/utils";

export const privacy = createAsyncThunk("privacy", async () => {
  const result = await apiRequest("get", "api/privacy/getAllPrivacies", null);

  return result;
});

const initialState = {
  privacyJusoor: [],
  loading: false,
  error: null,
};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    privacyResetOption: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(privacy.pending, (state) => {
        state.loading = true;
      })
      .addCase(privacy.fulfilled, (state, action) => {
        state.loading = false;
        state.privacyJusoor = action.payload.data.Privacy;
      })
      .addCase(privacy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { privacyResetOption } = privacySlice.actions;
export default privacySlice.reducer;
