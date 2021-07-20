import { useState } from 'react';
import Card from '../ui/Card';
import './Expense.css';
const ExpenseItem = (props)=>{

    
     const month = props.date.toLocaleString('en-US',{month:'long'});  
     const day= props.date.toLocaleString('en-US',{day:'2-digit'});
     const year = props.date.getFullYear();
   


    return (
<div>


        <Card className="expense-item">

        <div className="calender">
            <div> {month}</div>
            <div>{day}</div>
            <div>{year}</div>

        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
      </div>
    )
}

export default ExpenseItem;