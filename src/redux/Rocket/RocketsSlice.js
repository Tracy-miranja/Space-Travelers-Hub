import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketURL = 'https://api.spacexdata.com/v4/rockets';

export const getRocket = createAsyncThunk('rockets/getMission', async () => {
  const res = await fetch(rocketURL);
  const data = await res.json();
  return data;
});

const initialState = {
  rockets: [],
  loading: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducer: {},
  extraReducers: {
    [getRocket.pending]: (state) => {
      state.loading = true;
    },
    [getRocket.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [getRocket.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default rocketsSlice.reducer;
