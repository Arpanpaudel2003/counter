

let countEl=document.getElementById("count-el")
console.log(countEl)

let saveEl=document.getElementById("save-el")
console.log(saveEl)

let resetEl=document.getElementById("reset-btn")
console.log(resetEl)

let count=0

 function increment(){
  count+=1
countEl.textContent=count

 }
 function decrement(){
  count-=1
  countEl.textContent=count
 }
 function save(){
  let countstr=count + " - "
  saveEl.textContent += countstr
console.log(count)
 }

 function reset(){
countEl.textContent=0
count=0
 }

