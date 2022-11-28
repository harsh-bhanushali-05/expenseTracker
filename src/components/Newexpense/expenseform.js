import React, { useState } from "react";
import "./expenseformstyle.css";
import "./newExpenseStyles.css";
function Expenseform(props) {
  const [enteredtitle, seteneteredtitle] = useState("");
  const [enteredprice, seteneteredprice] = useState("");
  const [entereddate, setenetereddate] = useState("");
  function changeTitle() {
    seteneteredtitle(event.target.value);
  }
  function change_price() {
    seteneteredprice(event.target.value);
  }
  function change_date() {
    setenetereddate(event.target.value);
  }
  function submit_handler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredprice,
      date: new Date(entereddate),
    };
    props.onExpenseSave(expenseData);
    seteneteredtitle('');
    seteneteredprice('');
    setenetereddate('');
  }
  return (
    <form onSubmit={submit_handler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={changeTitle} />
          <label>Amount</label>
          <input
            type="number"
            value={enteredprice}
            min="0.1"
            step="0.01"
            onChange={change_price}
          ></input>
          <label>Date</label>
          <input
            type="date"
            value={entereddate}
            min="2019-01-01"
            onChange={change_date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Expenseform;
