let count =document.querySelector(".count")
let progress =document.querySelector(".progress")
let input =document.querySelector("input")
let div =document.querySelector("div")
let maxLenght =input.getAttribute("maxlength")


count.innerHTML=maxLenght;


input.oninput=function(){
    count.innerHTML =maxLenght - this.value.length ;
    count.innerHTML == 0 ? count.classList.add("zero") :  count.classList.remove("zero") ;
    //set the progress
progress.style.width =`${(this.value.length*100) / maxLenght}%`


}