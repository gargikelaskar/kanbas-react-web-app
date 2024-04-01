import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

const initialState:any = {
  assignments: [],
  assignment: { id: "", title: "Propulsion Assignment", course: "RS101",
    module:"Multiple Modules", points:"100 pts", DueDate:"Sep 18 at 11:59pm" },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      console.log("AP", action.payload);
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [...action.payload, ...state.assignments];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment:any) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment:any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;