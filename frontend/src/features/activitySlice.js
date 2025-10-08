import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/activities";

// Fetch all activities
export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// Add a new activity
export const addActivity = createAsyncThunk(
  "activities/addActivity",
  async (activity) => {
    const res = await axios.post(API_URL, activity);
    return res.data;
  }
);

// Update an existing activity
export const updateActivityAPI = createAsyncThunk(
  "activities/updateActivityAPI",
  async ({ id, updatedActivity }) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedActivity);
    return res.data;
  }
);

const activitySlice = createSlice({
  name: "activities",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      // Fetch activities
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      // Add activity
      .addCase(addActivity.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // Update activity
      .addCase(updateActivityAPI.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (activity) => activity._id === action.payload._id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default activitySlice.reducer;
