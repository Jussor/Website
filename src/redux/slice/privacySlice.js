import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const privacy = createAsyncThunk("privacy", async () => {
    
    const result = await apiRequest('get', 'api/privacy/getAllPrivacies', null)
    
    
    return result;
});

const initialState = {
    privacyJusoor: [],
    aboutLoading: false,
    aboutError: null,
}

const privacySlice = createSlice({
    name: "privacy",
    initialState,
    reducers: {
        privacyResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(privacy.pending, (state) => {
            
            state.aboutLoading = true;
        }).addCase(privacy.fulfilled, (state, action) => {
            state.aboutLoading = false;
            state.privacyJusoor = action.payload.data.privacy
            
        }).addCase(privacy.rejected, (state, action) => {
            state.aboutLoading = false;
            state.aboutError = action.payload
        })

    }
});


export const { privacyResetOption } = privacySlice.actions
export default privacySlice.reducer