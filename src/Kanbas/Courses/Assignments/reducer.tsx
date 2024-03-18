import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

export const initialState = {
    assignments: assignments,
    assignment: { title: "Assignment", description: "Assignment Description", dueDate: "2024-04-01", 
                  availableFromDate: "2024-03-01", availableUntilDate: "2024-05-01", points: "100" }
};

const assignmentsSlice = createSlice({ name: "assignments", initialState,
    reducers: {

        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
            state.assignment = { title: "Assignment",  description: "Assignment Description", dueDate: "2024-04-01", 
                                 availableFromDate: "2024-03-01", availableUntilDate: "2024-05-01", points: "100" };
        },
        deleteAssignment: (state, action) => {
            console.log("In deleteAssignment");
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
            console.log(state);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => (assignment._id === action.payload._id ? action.payload : assignment));
            state.assignment = { title: "New Title", description: "New Assignment Description", dueDate: "2024-09-19", 
                                 availableFromDate: "2024-09-24", availableUntilDate: "2024-12-01", points: "100" };
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer; 