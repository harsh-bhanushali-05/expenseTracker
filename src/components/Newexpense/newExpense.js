import React from "react";
import "./newExpenseStyles.css";
import "./expenseformstyle.css";
import expenseform from "./expenseform";
function newExpense(){
    return<div className="new-expense">
     <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" />
            <label>Amount</label>
            <input type="number" min="0.1" step="0.01"></input>
            <label>Date</label>
            <input type="date" min="2019-01-01"></input>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit"></button>
    </div>
</form>;
    </div>;
}
export default newExpense;