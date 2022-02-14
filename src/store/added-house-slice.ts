import { createSlice } from '@reduxjs/toolkit';

const addedHouseSlice = createSlice({
  name: 'addedHouse',
  initialState: {
    added: false,
  },
  reducers: {
    setAdded(state, action) {
      state.added = action.payload;
    },
  },
});

export const addedHouseActions = addedHouseSlice.actions;
export default addedHouseSlice;
