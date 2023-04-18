import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionURL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('mission/getMission', async () => {
  const response = await fetch(missionURL);
  const data = await response.json();
  return data;
});

const initialState = {
  mission: [],
  loading: false,
};

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.loading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.loading = false;
      state.mission = action.payload;
    },
    [getMissions.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default missionsSlice.reducer;
