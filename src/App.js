import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

 const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];


function App() {
  const [expenses,setExpenses] =useState(dummyExpenses);
  

  const addExpenseHandler= (expense) =>{
    setExpenses((prevExpenses)=>
    {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddingExpense={addExpenseHandler}/>      {/* sending function pointer as a props */}
      {/* <ExpenseItem                     //This is first alternative ways also see in expenseItem.js file this apply to all ExpenseItem in this file (means below)
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem> */}
       <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
