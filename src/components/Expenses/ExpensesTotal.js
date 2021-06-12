import React from 'react';
import Card from '../UI/Card';
import './ExpensesTotal.css';

const ExpensesTotal = (props) => {
    let totalExpense = 0;

    props.expense.forEach(expense => {
        totalExpense += expense;
        return totalExpense;
    });

    return (
        <div>
            {totalExpense !== 0 &&
                <Card className="expense-total" >
                    <div className="expense-total__description">
                        <h2>Total money expended in {props.year}:  {'$'+totalExpense}</h2>
                    </div>
                </Card>
            }
        </div>
    );
};

export default ExpensesTotal;