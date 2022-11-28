import React from "react";
import "./newExpenseStyles.css";
import "./expenseformstyle.css";
import Expenseform from "./expenseform";
function NewExpense(props) {
  function NewExpenseHandler(expense_data) {
    props.onNewExpense(expense_data);
  }
  return (
    <div className="new-expense">
      <Expenseform onExpenseSave={NewExpenseHandler} />
    </div>
  );
}
export default NewExpense;
