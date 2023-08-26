// import React from 'react';
import React, {useState} from "react";

import './ExpensesFilter.css';
import Card from'../UI/Card';

const ExpensesFilter = (props) => {
const [dropDown, setDropDown]= useState(2023);  // Check expenses
    const dropDownHandler = (event)=>{
        setDropDown(event.target.value);
        props.onChangeFilter(event.target.value);
    }
   
  return (
    <div className ='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year: {dropDown}</label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <Card ></Card>
    </div>
  );
};

export default ExpensesFilter;