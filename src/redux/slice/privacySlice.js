import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const about = createAsyncThunk("about", async () => {
    
    const result = await apiRequest('get', 'api/about/getAllAbouts', null)
    
    
    return result;
});

const initialState = {
    aboutJusoor: [],
    aboutLoading: false,
    aboutError: null,
}

const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        aboutResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(about.pending, (state) => {
            
            state.aboutLoading = true;
        }).addCase(about.fulfilled, (state, action) => {
            state.aboutLoading = false;
            state.aboutJusoor = action.payload.data.About
            
        }).addCase(about.rejected, (state, action) => {
            state.aboutLoading = false;
            state.aboutError = action.payload
        })

    }
});


export const { aboutResetOption } = aboutSlice.actions
export default aboutSlice.reducer