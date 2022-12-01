import "./Chartbarcss.css";
function ChartBar(props) {
  let barfill='0%';
  if(props.maxValue>0){
    barfill=Math.round((props.value/props.maxValue)*100)+"%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barfill}}></div>
        
      </div>
      <div className="chart-bar__label" >{props.name}</div>
    </div>
  );
}
export default ChartBar;
