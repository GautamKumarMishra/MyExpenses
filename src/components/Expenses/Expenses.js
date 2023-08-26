// import React, { useState} from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import React, { useState } from "react";
import ExpensesFilter from "../Filter/ExpensesFilter.js";
import ExpensesList from './ExpensesList.js'
import ExpenseChart from "./ExpensesChart.js";


function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const onFilter = (expense) => {
    return expense.date.getFullYear() == filterYear;
  };
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses}/>

        {/* {filterContent} */}
        {/* {console.log(props.expenses," ",filterYear)} */}
        <ExpensesList expenses ={filteredExpenses}/>
      </Card>
    </div>
  );
  }

export default Expenses;
