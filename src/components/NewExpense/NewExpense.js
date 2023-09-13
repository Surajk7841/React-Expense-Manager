import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseformHand = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onSaveNewex(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseform={saveExpenseformHand} />
    </div>
  );
};
export default NewExpense;
