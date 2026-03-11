
import { useState } from "react"
import { depositETH,withdrawETH,estimateGas } from "../web3/vault"
import { toast } from "../utils/toast"

export default function VaultPanel(){

const [amount,setAmount]=useState("")
const [gas,setGas]=useState("--")
const [loading,setLoading]=useState(false)

async function updateAmount(v){

setAmount(v)

try{
const g=await estimateGas(v)
setGas(g)
}catch{}

}

async function deposit(){

try{

setLoading(true)
await depositETH(amount)
toast("Deposit success")

}catch{

toast("Transaction failed")

}

setLoading(false)

}

async function withdraw(){

try{

setLoading(true)
await withdrawETH(amount)
toast("Withdraw success")

}catch{

toast("Transaction failed")

}

setLoading(false)

}

return(

<div className="vault">

<h2>Vault</h2>

<input
className="amount"
placeholder="ETH amount"
value={amount}
onChange={(e)=>updateAmount(e.target.value)}
/>

<p className="gas">Estimated Gas: {gas}</p>

<div className="actions">

<button className="deposit" disabled={loading} onClick={deposit}>
{loading?"Processing...":"Deposit"}
</button>

<button className="withdraw" disabled={loading} onClick={withdraw}>
Withdraw
</button>

</div>

</div>

)
}
