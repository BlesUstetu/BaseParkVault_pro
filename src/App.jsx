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

// WALLET STATE
const [account,setAccount] = useState(null)

// NAVIGATION STATE
const [page,setPage] = useState("dashboard")

// CONNECT WALLET
const connectWallet = async () => {

if(!window.ethereum){
alert("Metamask not found")
return
}

const accounts = await window.ethereum.request({
method:"eth_requestAccounts"
})

setAccount(accounts[0])

}

// DISCONNECT WALLET
const disconnectWallet = () => {
setAccount(null)
}

return(

<div className="app">

<Header
account={account}
connectWallet={connectWallet}
disconnectWallet={disconnectWallet}
/>

{/* DASHBOARD */}

{page==="dashboard" && (

<>
<Analytics/>
<PortfolioChart/>
</>

)}

{/* VAULT */}

{page==="vault" && <VaultPanel/>}

{/* HISTORY */}

{page==="history" && <History/>}

{/* LEADERBOARD */}

{page==="leaderboard" && <Leaderboard/>}

<TxModal/>

<Toast/>

<BottomNav
page={page}
setPage={setPage}
/>

</div>

)

}
