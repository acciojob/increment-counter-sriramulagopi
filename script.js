//your JS code here. If required.
const para = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");
btn.addEventListener("click",()=>{
	let count = Number(para.innerText);
	alert(count);
	para.innerText= ++count;
	
})