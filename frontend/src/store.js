import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './features/activitySlice';

export const store = configureStore({
  reducer: {
    activities: activityReducer
  }
});
