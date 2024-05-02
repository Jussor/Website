import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const team = createAsyncThunk("team", async () => {
    
    const result = await apiRequest('get', 'api/team/getAllTeams', null)
    
    
    return result;
});

const initialState = {
    totalTeam: [],
    teamLoading: false,
    teamError: null,
}

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        teamResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(team.pending, (state) => {
            
            state.teamLoading = true;
        }).addCase(team.fulfilled, (state, action) => {
            state.teamLoading = false;
            state.totalTeam = action.payload.data.Team
            
        }).addCase(team.rejected, (state, action) => {
            state.teamLoading = false;
            state.teamError = action.payload
        })

    }
});


export const { teamResetOption } = teamSlice.actions
export default teamSlice.reducer