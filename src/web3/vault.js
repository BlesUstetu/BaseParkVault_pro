
import { ethers } from "ethers"

export const VAULT_ADDRESS="0xYourContractAddress"

const ABI=[
"function deposit() payable",
"function withdraw(uint256 amount)"
]

async function contract(){

const provider=new ethers.BrowserProvider(window.ethereum)
const signer=await provider.getSigner()

return new ethers.Contract(VAULT_ADDRESS,ABI,signer)

}

export async function depositETH(amount){

const c=await contract()

const tx=await c.deposit({
value:ethers.parseEther(amount)
})

await tx.wait()

}

export async function withdrawETH(amount){

const c=await contract()

const tx=await c.withdraw(
ethers.parseEther(amount)
)

await tx.wait()

}

export async function estimateGas(amount){

try{

const c=await contract()

const gas=await c.deposit.estimateGas({
value:ethers.parseEther(amount||"0")
})

return gas.toString()

}catch{

return "--"

}

}
