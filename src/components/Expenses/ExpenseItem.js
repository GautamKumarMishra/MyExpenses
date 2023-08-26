import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";


//  function ExpenseItem(props){         //This is first alternative ways also see in Apps.js file

//     return(
//         <div className="expense-item">
//       <div>{props.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//     )
// }

 function ExpenseItem(props){  
 // function ExpenseItem(date,title,amount){                       //This is 2nd alternative in which we just remove props.expenses from below code and it works same.This is proper javascript object destructing concept
// const [title, setTitle]= useState(props.expense.title);          //This block will be revoked(recalled) whenever setTitle funvtion written below in called means when we clicked
//  function clickHandler(){
//       setTitle("Updated");
//   }
  // const changedExpenses=props.expense()

  // props.expense.date.getFullYear()
    return(
        <Card className="expense-item">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
       <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Button</button> */}
    </Card>
    )
}
export default ExpenseItem;