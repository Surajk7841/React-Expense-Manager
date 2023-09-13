import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [submitBtn, setSumbitBtn] = useState(false);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const amountChage = (event) => {
    setAmount(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseform(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setSumbitBtn(false);
  };

  const clickHand = () => {
    setSumbitBtn(true);
  };

  let formPreview = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChage}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChange}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setSumbitBtn(false)} type="cancel">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  return (
    <div>
      {submitBtn ? (
        formPreview
      ) : (
        <button className="addExpenseBt" onClick={clickHand} type="submit">
          Add New Expense
        </button>
      )}
    </div>
  );
};
export default ExpenseForm;
