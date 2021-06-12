import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesTotal from './ExpensesTotal';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const handleExpensesFilterChange = (data) => {
        setFilteredYear(data);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const sortedExpenses = filteredExpenses.slice().sort((a, b) => b.date - a.date);

    const annualExpenses = filteredExpenses.map(expense => expense.amount);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onExpensesFilterChange={handleExpensesFilterChange} selectedYear={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesTotal expense={annualExpenses} year={filteredYear}/>
                <ExpensesList items={sortedExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;