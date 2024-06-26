import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const Home= createAsyncThunk("Home", async () => {
    
    const result = await apiRequest('get', 'api/contentPost/getHomeContent', null,null)
    return result;
});

const initialState = {
    Main: [],
    JusoorTv:[],
    WeeklyPosts:[],
    MonthlyPosts:[],
    loading: false,
    error: null,
}

const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        HomeResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Home.pending, (state) => {
            state.loading = true;
        }).addCase(Home.fulfilled, (state, action) => {
          
            state.loading = false;
            state.Main = action.payload.data.Main
            state. JusoorTv= action.payload.data.JusoorTv
            state. WeeklyPosts= action.payload.data.WeeklyPosts
            state. MonthlyPosts= action.payload.data.MonthlyPosts

        }).addCase(Home.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

    }
});


export const { HomeResetOption } = HomeSlice.actions
export default HomeSlice.reducer