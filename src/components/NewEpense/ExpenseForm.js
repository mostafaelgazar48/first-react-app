 
 import { useState } from 'react';
import './ExpenseForm.css';


 const ExpenseForm = (props)=>{

 const [enteredTitle,setEnteredTitle] =useState('');
 const [enteredAmount,setEnteredAmount] =useState('');
 const [enteredDate,setEnteredDate] =useState('');



 const titleHandleChange= (e)=>{
   setEnteredTitle(e.target.value);

}
const amountHandleChange= (e)=>{
setEnteredAmount(e.target.value);

}
const dateHandleChange= (e)=>{
  setEnteredDate(e.target.value);

}
const submitHandler = (e)=>{
    e.preventDefault();

    const data = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        id:Math.floor(Math.random() * 100)
    }
    props.onSave(data);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredAmount('');

}

return (
        <form onSubmit={submitHandler}>
            <div className ="expense-controls">
                <div className="expense-control">
                    <label> Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandleChange}/>
                </div>

                <div className="expense-control">
                    <label> Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountHandleChange} min=".01" step=".01" />
                </div>


                <div className="expense-control">
                    <label> Date</label>
                    <input type="date" value={enteredDate} onChange={dateHandleChange} />
                </div>
            </div>
            <button>Submit</button>

        </form>
)
 };


 export default ExpenseForm;