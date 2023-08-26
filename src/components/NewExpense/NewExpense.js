import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import "../Expenses/Expenses.css";
const NewExpense=(props)=>{
    const [checkAddExpenses,setCheckAddExpenses]=React.useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random()+"",
        };
        props.onAddingExpense(expenseData)
    }
    const clickHandler=()=>{
        setCheckAddExpenses(true);
    }
    const stopExpenses=()=>{
        setCheckAddExpenses(false);
    }
    if(checkAddExpenses===false){
        return(
            <div className='new-expense'>
            <button onClick={clickHandler}>Add new expenses</button>
            </div>
        )}
        
    else{
    return(
        <div className='new-expense'>
            {/* <button onClick={clickHandler}>Add new expenses</button> */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopExpenses={stopExpenses}/>
        </div>

    )}
}
export default NewExpense ;