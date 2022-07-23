import { createSlice } from "@reduxjs/toolkit";

import getCurrentDateTime from "../../services/getCurrentDateTime";

const initialState = {
    filter: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
        debugger;   
      const newState = {
        filter: action.payload,
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

export const { addFilter } = filterSlice.actions;
export default filterSlice.reducer;
