import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/MissionsSlice';
import rocketReducer from './Rocket/RocketsSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,
  },
});
