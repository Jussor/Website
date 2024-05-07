import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { apiRequest } from '../../Utils/utils';

export const contactus = createAsyncThunk("conatctus", async (data) => {
    
    const result = await apiRequest('post', 'api/query/createQueryPost', data)
    
    
    return result;
});

const initialState = {
    contact: {},
    contactLoading: false,
    
}

const contactSlice = createSlice({
    name: "contactus",
    initialState,
    reducers: {
        contactResetOption: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(contactus.pending, (state) => {
            
            state.contactLoading = true;
        }).addCase(contactus.fulfilled, (state, action) => {
            state.contactLoading = false;
            state.contact = action.payload.data;
            console.log(action.payload.data)
            
        }).addCase(contactus.rejected, (state, action) => {
            state.contactLoading = false;
            
        })

    }
});


export const { contactResetOption } = contactSlice.actions
export default contactSlice.reducer