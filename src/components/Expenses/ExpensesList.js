import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem.js";
// import ExpenseItem from "./ExpenseItem.js";

function ExpensesList(props){
    if(props.expenses.length==0){
      console.log(props.expenses)
        return (<h2 className='expenses-list__fallback'>No Expenses Found</h2>)
    }
    else {
        let filterContent='No Expenses Found' ;      
    return(
        <ul className='expenses-list '>{props.expenses.map((ourExpenses) => (
            <ExpenseItem key={ourExpenses.id} expense={ourExpenses} />
          ))}</ul>
        
    );
    } 
}
export default ExpensesList;