import {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItem(props){
    const [title,setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle('changed');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    )
}
export default ExpenseItem