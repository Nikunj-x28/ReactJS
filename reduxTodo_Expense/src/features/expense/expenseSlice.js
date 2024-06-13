import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    // {
    //     id:"",
    //     amount:"",
    //     description:""
    //  }
  ],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: nanoid(),
        amount: action.payload.amount,
        description: action.payload.description,
      };
      state.expenses.push(newExpense);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
