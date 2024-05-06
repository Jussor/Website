import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slice/categorySlice';
import bannerSlice from './slice/bannerSlice';
import homeSlice from './slice/homeSlice';
import teamSlice from './slice/teamSlice';
import aboutSlice from './slice/aboutSlice';
import privacySlice from './slice/privacySlice';
import contactusSlice  from './slice/contactusSlice';
import postSlice from './slice/postSlice';

export const store = configureStore({
    reducer: {
        category: categorySlice,
        banner: bannerSlice,
        home:homeSlice,
        team : teamSlice,
        about : aboutSlice,
        privacy : privacySlice,
        contact : contactusSlice,
        post :postSlice,
    }

});