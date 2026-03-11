export default function BottomNav({page,setPage}){

return(
<div className="bottom-nav">
<button onClick={()=>setPage("dashboard")}>
Dashboard
</button>
<button onClick={()=>setPage("vault")}>
Vault
</button>
<button onClick={()=>setPage("history")}>
History
</button>
<button onClick={()=>setPage("leaderboard")}>
Leaderboard
</button>
</div>
)

}
