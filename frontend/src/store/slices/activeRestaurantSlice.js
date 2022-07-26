import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeRestaurant: {},
};

const activeRestaurantSlice = createSlice({
  name: "activeRestaurant",
  initialState,
  reducers: {
    selectedRestaurant : (state, action) => {
      const newState = {
        activeRestaurant: action.payload,
      };
      return newState;
    },   
  },
});

export const { selectedRestaurant } = activeRestaurantSlice.actions;
export default activeRestaurantSlice.reducer;
