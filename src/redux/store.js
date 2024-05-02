import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slice/categorySlice';
import bannerSlice from './slice/bannerSlice';
import homeSlice from './slice/homeSlice';
import teamSlice from './slice/teamSlice';

export const store = configureStore({
    reducer: {
        category: categorySlice,
        banner: bannerSlice,
        home:homeSlice,
        team : teamSlice
       
    }

});