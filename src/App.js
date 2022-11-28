import React, { useState } from "react";
import List from "./components/List";
import "./components/ListStyle.css";
import NewExpense from "./components/Newexpense/newExpense";
const dummy_expenses = [
  {
    title: "Car Insurance ",
    amount: 29.67,
    date: new Date(2021, 2, 18),
  },
  {  title: "New TV", amount: 94.72, date: new Date(2021, 4, 18) },
  {  title: "Food", amount: 24.17, date: new Date(2021, 6, 18) },
  {  title: "New Laptop", amount: 294.67, date: new Date(2021, 9, 18) },
];
function App() {
  const[expenses,setexp]=useState(dummy_expenses);
  function newExpenseHandler(data) {
    setexp(prev=>{return[data]});
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <div className="expenses">
        {expenses.map(exp => (
          <List items={exp} />
        ))}
      </div>
    </div>
  );
}
export default App;
