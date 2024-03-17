import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: "2024-04-01",
    availableFromDate: "2024-04-01",
    availableUntilDate: "2024-05-01",
    points: "100",
  },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      //addAssignment, deleteAssignment, updateAssignment, selectAssignment.
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
        state.assignment = {
          title: "New Assignment",
          description: "New Assignment Description",
          dueDate: "2024-04-01",
          availableFromDate: "2024-04-01",
          availableUntilDate: "2024-05-01",
          points: "100"};
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignments) => assignments._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
        state.assignment = {
          title: "New Assignment",
          description: "New Assignment Description",
          dueDate: "2024-04-01",
          availableFromDate: "2024-04-01",
          availableUntilDate: "2024-05-01",
          points: "100"};
      },
      selectAssignment: (state, action) => {
        state.assignments = action.payload;
      },
    },
  });


export const { addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;