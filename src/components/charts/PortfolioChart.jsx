import { LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts"

export default function PortfolioChart(){

const data=[
{name:"Week1",value:1},
{name:"Week2",value:1.6},
{name:"Week3",value:2.4},
{name:"Week4",value:3.2}
]

return(

<div className="chart">

<h3>Portfolio Growth</h3>

<ResponsiveContainer width="100%" height={260}>

<LineChart data={data}>

<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Line type="monotone" dataKey="value"/>

</LineChart>

</ResponsiveContainer>

</div>

)

}
