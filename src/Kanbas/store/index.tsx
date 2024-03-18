import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer";

export type AssignmentType = {
    _id: string, title: string, description: string,points: string, 
    dueDate: string, availableFromDate: string, availableUntilDate: string, 
    course: string;
};

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };

    assignmentsReducer: {
        assignments: AssignmentType[];
        assignment: AssignmentType;
    };
}

const store = configureStore({                                      // Add reducer to store.
    reducer: {
        modulesReducer, assignmentsReducer
    }
});
export default store;