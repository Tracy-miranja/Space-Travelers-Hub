import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Mission: [],
};

const missionsSlice = createSlice({
  name: 'Mission',
  initialState,
  reducer: {

  },
});

export default missionsSlice.reducer;
