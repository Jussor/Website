import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const banner = createAsyncThunk("banner", async () => {
   
    const result = await apiRequest('GET', 'api/banner/getAllBanners', null)
    return result;
});

const initialState = {
    bannerSuccess: [],
    bannerLoading: false,
    bannerError: null
}

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        bannerResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(banner.pending, (state) => {
            state.bannerLoading = true;
        }).addCase(banner.fulfilled, (state, action) => {
            state.bannerLoading = false;
            state.bannerSuccess = action.payload.data.Banners
        }).addCase(banner.rejected, (state, action) => {
            state.bannerLoading = false;
            state.bannerError = action.payload
        })

    }
});


export const { bannerResetOption } = bannerSlice.actions
export default bannerSlice.reducer