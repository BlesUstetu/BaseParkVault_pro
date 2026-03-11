import { ethers } from "ethers"

export async function connectWallet(){

if(!window.ethereum){
alert("Install MetaMask")
return
}

const provider=new ethers.BrowserProvider(window.ethereum)

await provider.send("wallet_switchEthereumChain",[
{chainId:"0x2105"}
]).catch(()=>{})

const accounts=await provider.send("eth_requestAccounts",[])

localStorage.setItem("wallet",accounts[0])

return accounts[0]

}

export function getAccount(){
return localStorage.getItem("wallet")
}
