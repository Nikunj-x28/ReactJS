import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [userInput,setUserInput]=useState({
  //     enteredAmount:'',
  //     enteredDate:'',
  //     enteredTitle:''
  // })
  const [enteredTitle, setEnteredTitle] = useState("");
  // const titleChangeHandler=(event)=>{
  //     setEnteredTitle(event.target.value);
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredTitle:event.target.value,
  //     // })
  // }
  const [enteredDate, setEnteredDate] = useState("");
  // const dateChangeHandler=(event)=>{
  //     setenteredDate(event.target.value);
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredDate:event.target.value,
  //     // })
  // }
  const [enteredAmount, setEnteredAmount] = useState("");
  // const amountChangeHandler=(event)=>{
  //     setenteredAmount(event.target.value);
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredAmount:event.target.value
  //     // })
  //     // setUserInput((prevState)=>{
  //     //     return {...prevState,enteredAmount:event.target.value};
  //     // });
  // }
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "Title") {
      setEnteredTitle(value);
    } else if (identifier === "Amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };
  const submitHandler = (event) => {
    // we do this to prevent the default submission behaviour that is the form sends the data to the server
    // it is hosted on . This reloads the page but we want to handle the data here by using Javascript.
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // parsing data
    };
    console.log(expenseData);
    // after form submission we are clearing the data
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // when state updates the input updates 
            // this has the advantage that when we empty the state on form submission
            // the state change causes the form to become empty again.
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("Title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("Amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2016-01-01"
            max="2028-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("Date", event.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
