 
 import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
 const NewExpense = (props)=>{

    const saveDataHandler =(data)=>{
        const expense = {
            ...data
        };
       props.onAddExpense(expense);
    }

return (
        <div className="new-expense" >
            <ExpenseForm onSave={saveDataHandler}/>
        </div>
)
 };


 export default NewExpense;