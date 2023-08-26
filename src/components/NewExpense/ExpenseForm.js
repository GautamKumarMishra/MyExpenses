import "./ExpenseForm.css";
import React, { useState } from "react";
import NewExpenses from "./NewExpense";
import ExpenseItem from "../Expenses/ExpenseItem.js";
import "../Expenses/Expenses.css";
// const[userInput,setUserInput]=useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
// });
// const dateChangeHandler=(event)=>{
// setUserInput({
//     ...userInput;
//     enteredDate:event.target.value;
// })
// }

//   const inputChangeHandler =(identifier, value)=>{
//     if(identifier=='title'){
//         setEnteredTitle(value);
//     }
//     else if(identifier=='amount'){
//         setEnteredAmount(value);
//     }
//     else{
//         setEnteredDate(value);
//     }
//   }

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      // date: new Date(enteredDate + 'T00:00:00'),
    };
    <ExpenseItem expense={expenseData}></ExpenseItem>;
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelClickHandler=()=>{
    props.onStopExpenses();
  }
 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelClickHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
