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

// STATE NAVIGATION  ← tambahkan disini
const [page,setPage]=useState("dashboard")

return(

<div className="app">

<Header account={account} setAccount={setAccount}/>

<Analytics/>

<PortfolioChart/>

<VaultPanel/>

<Leaderboard/>

<History/>

<TxModal/>

<Toast/>

<BottomNav/>

</div>

)

}
