import { useState,useEffect } from "react"
import { connectWallet,getAccount } from "../web3/wallet"

export default function Header(){

const [account,setAccount]=useState(null)
const [menu,setMenu]=useState(false)

useEffect(()=>{
const acc=getAccount()
if(acc) setAccount(acc)
},[])

async function connect(){
const acc=await connectWallet()
setAccount(acc)
}

return(

<header className="header">

<h1 className="logo">BaseParkVault</h1>

{account?(
<div className="walletBox">

<button onClick={()=>setMenu(!menu)} className="walletBtn">
{account.slice(0,6)}...{account.slice(-4)}
</button>

{menu&&(
<div className="walletMenu">
<button onClick={()=>navigator.clipboard.writeText(account)}>Copy Address</button>
<a target="_blank" href={"https://basescan.org/address/"+account}>Explorer</a>
</div>
)}

</div>
):(
<button className="connectBtn" onClick={connect}>Connect Wallet</button>
)}

</header>

)
}
