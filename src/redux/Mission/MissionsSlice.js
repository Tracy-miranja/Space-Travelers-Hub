/* eslint-disable max-len */
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
  reducers: {
    joinMission: (state, action) => {
      const newState = state.mission.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;

        return { ...mission, reserved: true };
      });
      return { ...state, mission: newState };
    },
    leaveMission: (state, action) => {
      const newState = state.mission.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, mission: newState };
    },

  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.loading = false;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.loading = false;
      const newData = [];
      const receivedData = action.payload;
      receivedData.forEach((mission) => {
        const newMissionObj = Object.fromEntries(Object.entries(mission).filter(([key]) => key === 'mission_name' || key === 'mission_id' || key === 'description'));
        newData.push(newMissionObj);
      });
      return { ...state, mission: newData };
    },
    [getMissions.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
