export function toast(text){

const el=document.getElementById("toast")

if(!el) return

el.innerText=text
el.style.opacity=1

setTimeout(()=>{
el.style.opacity=0
},3000)

}
