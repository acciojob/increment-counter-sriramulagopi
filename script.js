//your JS code here. If required.
let count = 0;
const btn = document.getElementById("incrementBtn");
const para = document.getElementById("counter");
btn.addEventListener("click",()=>{
	para.innerText=`${count}`;
	alert(count++);
})