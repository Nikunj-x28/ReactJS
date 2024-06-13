import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../features/expense/expenseSlice";
const Expense = () => {
  const expenses = useSelector((state) => {
    return state.expense.expenses;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div>Expenses</div>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {expense.description}
              {expense.amount}
              <button
                onClick={() => {
                  dispatch(removeExpense(expense.id));
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Expense;
