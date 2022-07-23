import { createSlice } from "@reduxjs/toolkit";

import getCurrentDateTime from "../../services/getCurrentDateTime";

const initialState = {
  restaurantList: [],
};

const restaurantListSlice = createSlice({
  name: "restaurantList",
  initialState,
  reducers: {
    addInitialRestaurantList: (state, action) => {
      const newState = {
        restaurantList: action.payload,
      };
      return newState;
    },
    // removeAll(_state, _action) {
    //   return initialState;
    // },
    // deleteItem(state, action) {
    //   const newState = {
    //     toDoList: state.toDoList.filter(
    //       (_listItem, listIndex) => listIndex !== action.payload
    //     ),
    //   };
    //   return newState;
    // },
    // getItem(_state, action) {
    //   const newState = {
    //     toDoList: action.payload,
    //   };
    //   return newState;
    // },
    // editItem(state, action) {
    //   const updatedIndex = action.payload.editTaskId;
    //   const updatedTaskDescription = action.payload.taskDescription;
    //   const newState = {
    //     toDoList: [
    //       ...state.toDoList.slice(0, updatedIndex),
    //       {
    //         taskTitle: updatedTaskDescription,
    //         createdDate: getCurrentDateTime(),
    //       },
    //       ...state.toDoList.slice(updatedIndex + 1),
    //     ],
    //   };
    //   return newState;
    // },
  },
});

export const { addInitialRestaurantList } = restaurantListSlice.actions;
export default restaurantListSlice.reducer;
