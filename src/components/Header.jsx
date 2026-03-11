import { useEffect, useState } from "react"

export default function Header({ account, connectWallet, disconnectWallet }) {

const [network, setNetwork] = useState("")

useEffect(() => {

const detectNetwork = async () => {

if(!window.ethereum) return

const chainId = await window.ethereum.request({
method: "eth_chainId"
})

if(chainId === "0x2105"){
setNetwork("Base")
}
else if(chainId === "0xaa36a7"){
setNetwork("Sepolia")
}
else{
setNetwork("Unknown")
}

}

detectNetwork()

}, [])

return(

<header className="header">

<div className="header-left">

<h1 className="logo">
BaseParkVault
</h1>

{network && (
<span className="network">
{network}
</span>
)}

</div>

<div className="header-right">

{account ? (

<button
className="wallet-btn"
onClick={disconnectWallet}
>

{account.slice(0,6)}...{account.slice(-4)}

</button>

) : (

<button
className="wallet-btn connect"
onClick={connectWallet}
>

Connect Wallet

</button>

)}

</div>

</header>

)

}
