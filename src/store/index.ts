import { configureStore } from '@reduxjs/toolkit';
import addedHouseSlice from './added-house-slice';

const store = configureStore({
  reducer: {
    addHouse: addedHouseSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
