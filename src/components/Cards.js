import './Cards.css';
function Card(props){
let classses=props.className+'card';
return <div className={classes}>{props.children}</div>;
}
export default Card;