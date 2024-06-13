import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/expense/expenseSlice";

const AddExpense = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addExpenseHandler = (e) => {
    e.preventDefault();
    dispatch(addExpense({ amount, description }));
    setAmount(0);
    setDescription("")
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <input
        type="number"
        placeholder="Enter expense amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter expense description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit"> Add Expense </button>
    </form>
  );
};

export default AddExpense;
