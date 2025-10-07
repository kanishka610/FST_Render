import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace this with your deployed Render backend URL
const API_URL = 'https://<YOUR-RENDER-BACKEND-URL>.onrender.com/activities';

// Fetch all activities
export const fetchActivities = createAsyncThunk('activities/fetch', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// Add new activity
export const addActivityAPI = createAsyncThunk('activities/add', async (activity) => {
  const res = await axios.post(API_URL, activity);
  return res.data;
});

// Update activity
export const updateActivityAPI = createAsyncThunk('activities/update', async ({ id, data }) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
});

// Delete activity
export const deleteActivityAPI = createAsyncThunk('activities/delete', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const activitySlice = createSlice({
  name: 'activities',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(addActivityAPI.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(updateActivityAPI.fulfilled, (state, action) => {
        const index = state.list.findIndex(a => a._id === action.payload._id);
        if (index >= 0) state.list[index] = action.payload;
      })
      .addCase(deleteActivityAPI.fulfilled, (state, action) => {
        state.list = state.list.filter(a => a._id !== action.payload);
      });
  }
});

export default activitySlice.reducer;
