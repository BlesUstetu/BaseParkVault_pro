export default function Leaderboard(){

const users=[
{wallet:"0x81A3...92F",amount:"12.4"},
{wallet:"0x72FF...113",amount:"9.8"},
{wallet:"0xA23B...992",amount:"7.1"}
]

return(

<div className="leaderboard">

<h3>Top Depositors</h3>

{users.map((u,i)=>(
<div key={i} className="leader">
<span>{u.wallet}</span>
<span>{u.amount} ETH</span>
</div>
))}

</div>

)
}
