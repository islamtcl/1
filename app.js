let line1 = document.querySelector("#line-1");
let line2 = document.querySelector("#line-2");
let line3 = document.querySelector("#line-3");
document.querySelector("#menubtn").addEventListener("click",function(){
document.querySelector("#menu").classList.toggle("left-full");
//document.querySelector("#menu").classList.add("transition","ease-in-out", "duration-300");
line1.classList.toggle("transform");
line1.classList.toggle("rotate-45");
line1.classList.toggle("relative");
line1.classList.toggle("top-1.5");
line2.classList.toggle("hidden");
line3.classList.toggle("transform");
line3.classList.toggle("-rotate-45");
line1.classList.toggle("");

},false);