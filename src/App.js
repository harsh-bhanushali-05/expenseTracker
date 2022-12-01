import React, { useState } from "react";
import List from "./components/List";
import "./components/ListStyle.css";
import ExpenseChart from "./components/chart/ExpensesChart";
import ExpenseFilter from "./components/ExpenseFilter";
import NewExpense from "./components/Newexpense/newExpense";
const dummy_expenses = [
  {
    id: 1,
    title: "Car Insurance ",
    amount: 29.67,
    date: new Date(2021, "2", 18),
  },
  { id: 2, title: "New TV", amount: 94.72, date: new Date(2022, "4", 18) },
  { id: 3, title: "Food", amount: 24.17, date: new Date(2021, "6", 18) },
  { id: 4, title: "New Laptop", amount: 294.67, date: new Date(2020, "9", 18) },
];
function App() {
  const [expenses, setexp] = useState(dummy_expenses);
  const [filter_expenses, setexp2] = useState(expenses);
  function newExpenseHandler(data) {
    setexp((prev) => {
      return [data, ...prev];
    });
    setexp2((prev)=>{
      return [data,...prev];
    });

  }
  const [filteredyear, setfilteredyear] = useState("2022");
  function onChangeFilter(selectedYear) {
    setfilteredyear(selectedYear);
    filter_expenseslol(selectedYear);
    console.log(selectedYear);
  }
  function filter_expenseslol(year) {
    if (year != "0000") {
      setexp2(
        expenses.filter((Year) => Year.date.getFullYear().toString() == year)
      );
    } else {
      setexp2(expenses);
    }
  }
  return (
    <div>
      
      <NewExpense onNewExpense={newExpenseHandler} />
      <div className="expenses">
        <ExpenseFilter value={filteredyear} onChangeFilter={onChangeFilter} />
        <ExpenseChart Expense={filter_expenses} />
        {filter_expenses.map((exp) => (
          <List
            key={exp.id}
            title={exp.title}
            price={exp.amount}
            date={exp.date}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
