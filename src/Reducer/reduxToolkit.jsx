
// reduxToolkit.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: []
    },
    reducers: {
        addTodo: (state, action) => {

            state.tasks = [...state.tasks, { ...action.payload, completed: false }];
        },



        deleteTodo: (state, action) => {
            // Use filter to create a new array excluding the todo item with the specified ID
            state.tasks = state.tasks.filter((task, index) => index !== action.payload);
        },

        completeTodo: (state, action) => {
            state.tasks = state.tasks.map((task, index) =>
                index === action.payload ? { ...task, completed: true } : task
            );
        },



    },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer; // Extract the reducer function

export default todoReducer; // Export the reducer function as default

