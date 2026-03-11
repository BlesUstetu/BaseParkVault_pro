export default function TxModal({show,message}){

if(!show) return null

return(

<div className="tx-modal">

<div className="tx-box">

⏳ {message || "Waiting for confirmation..."}

</div>

</div>

)

}
