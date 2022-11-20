import "./ListStyle.css";
import React,{useState} from "react";
function List(props){
    const [title,setTitle]= useState(props.title);
    function  Change_title(){
        setTitle("Updated");
    }
    return (
        <div>
        <div className="main">
        <div className="date_container">
        <div className="date Month"><strong>{props.date.toLocaleString('en-US',{month:'long'})}</strong></div>
        <div className="date Year">{props.date.getFullYear()}</div>
        <div className="date Day"><strong>{props.date.toLocaleString('en-US',{day:'2-digit'})}</strong></div>
        </div>
        <h2 className="Title">{title}</h2>
        <div className="price">${props.amount}</div>
        <button onClick={Change_title}>Change Title </button>
        </div>
    </div>);
}
export default List;