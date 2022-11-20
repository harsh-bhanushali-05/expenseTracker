import React from "react";
import List from "./components/List";
import "./components/ListStyle.css";
import newExpense from "./components/Newexpense/newExpense";
function App() {
const expenses=[
  {id: 1 ,title:"Car Insurance ", amount:29.67 , date: new Date( 2021,2,18)},
  {id:2,title:"New TV", amount:94.72 , date: new Date( 2021,4,18)},
  {id:3,title:"Food", amount:24.17 , date: new Date( 2021,6,18)},
  {id:4,title:"New Laptop", amount:294.67 , date: new Date( 2021,9,18)}
];
  return( <div> 
  <newExpense/>
  <div className="expenses">
  <List title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
  <List title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
  <List title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
  <List title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
  </div>
  
  </div>
  );
}
export default App;
