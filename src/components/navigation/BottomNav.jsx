export default function BottomNav({page,setPage}){

return(

<div className="bottom-nav">

<button
className={page==="dashboard"?"active":""}
onClick={()=>setPage("dashboard")}
>
Dashboard
</button>

<button
className={page==="vault"?"active":""}
onClick={()=>setPage("vault")}
>
Vault
</button>

<button
className={page==="history"?"active":""}
onClick={()=>setPage("history")}
>
History
</button>

<button
className={page==="leaderboard"?"active":""}
onClick={()=>setPage("leaderboard")}
>
Leaderboard
</button>

</div>

)

}
