import React from "react";
import Chart from "./Chart";
function ExpenseChart(props){
    let max=-1;
    const chartDataPoints=[
        {name:'Jan', value:'0'},
        {name:'Feb', value:'0'},
        {name:'Mar', value:'0'},
        {name:'Apr', value:'0'},
        {name:'May', value:'0'},
        {name:'Jun', value:'0'},
        {name:'Jul', value:'0'},
        {name:'Aug', value:'0'},
        {name:'Sep', value:'0'},
        {name:'Oct', value:'0'},
        {name:'Nov', value:'0'},
        {name:'Dec', value:'0'},
    ];
   for(let i=0;i<props.Expense.length;i++){
   let month= props.Expense[i].date.getMonth();
    console.log(month);
     chartDataPoints[month].value+=props.Expense[i].amount;
   }
   for(let i=0;i<12;i++){
    if(parseInt(chartDataPoints[i].value)>max){
        max=parseInt(chartDataPoints[i].value);
        console.log(max);
    }
    console.log(max);
    }
return <Chart dataPoints={chartDataPoints} max_val={max}/>
}
export default ExpenseChart;