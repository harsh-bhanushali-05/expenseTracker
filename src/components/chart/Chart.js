import ChartBar from "./ChartBar";
import "./Chart.css"
function Chart (props){
    return <div className="chart">
        {props.dataPoints.map(datapoint => <ChartBar value={datapoint.value} maxValue={props.max_val} name={datapoint.name} key={datapoint.name}/>)}
    </div>
};
export default Chart;