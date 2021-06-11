import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const handleExpenseDataSubmit = (data) => {
        const expenseDataID = {
            ...data,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseDataID);
        setIsAdding(false);
    };

    const [isAdding, setIsAdding] = useState(false);

    const handleAddButton = () => {
        setIsAdding(true);
    }

    const handleCancelButtonClick = () => {
        setIsAdding(false);
    }

    return (
        <div className="new-expense">
            {!isAdding && <button onClick={handleAddButton}>Add new expense</button>}
            {isAdding && 
                <ExpenseForm
                onExpenseDataSubmit={handleExpenseDataSubmit}
                onCancelButtonClicked={handleCancelButtonClick} />
            }
        </div>
    );
};

export default NewExpense;