import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";
import expenseReducer from "../features/expense/expenseSlice.js"
export const store = configureStore({
  reducer: {
    todo:todoReducer,
    expense:expenseReducer
  }
});

