import { useState } from "react"

import Header from "./components/Header"
import Analytics from "./components/dashboard/Analytics"
import PortfolioChart from "./components/charts/PortfolioChart"
import VaultPanel from "./components/VaultPanel"
import Leaderboard from "./components/leaderboard/Leaderboard"
import History from "./components/history/History"
import Toast from "./components/ui/Toast"
import TxModal from "./components/ui/TxModal"
import BottomNav from "./components/navigation/BottomNav"

export default function App(){

// STATE WALLET
const [account,setAccount]=useState(null)

// STATE NAVIGATION
const [page,setPage]=useState("dashboard")

return(

<div className="app">

<Header account={account} setAccount={setAccount}/>

{/* PAGE RENDER */}

{page==="dashboard" && (
<>
<Analytics/>
<PortfolioChart/>
</>
)}

{page==="vault" && <VaultPanel/>}

{page==="history" && <History/>}

{page==="leaderboard" && <Leaderboard/>}

<TxModal/>

<Toast/>

<BottomNav page={page} setPage={setPage}/>

</div>

)

}
