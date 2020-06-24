var x = document.querySelector("#rangoX")
var y = document.querySelector("#rangoY");
var size = document.querySelector("#rangoT");
var op = document.querySelector("#rangoO");
var list = document.getElementById("lista");
var hex = document.querySelector("#hex");
var r = document.getElementById("rangoR");
var g = document.getElementById("rangoG");
var b = document.getElementById("rangoB");
var a = document.getElementById("rangoA");

var bor = document.querySelector("#rangoBorder");


let acept = document.getElementById("aceptar");
let color = document.getElementById("color");
let figura = document.querySelector("section");

x.addEventListener("change", function(){
    figura.style.left = x.value + "px";
});

y.addEventListener("change", function(){
    figura.style.top = y.value + "px";
});

size.addEventListener("change", function(){
    figura.style.transform = "scale(" + size.value + ")";
});

op.addEventListener("change", function(){
    figura.style.opacity = op.value;
});

acept.addEventListener("click", function(){
    figura.className = "";
    figura.classList.add(list.value);
});

hex.addEventListener("change", function(){
    figura.style.backgroundColor = "#" + hex.value;
});

color.addEventListener("change", function(){
    figura.style.backgroundColor = "rgba(" + r.value + "," + g.value + "," + b.value + "," + a.value + ")"; 
});

bor.addEventListener("change", function(){
    figura.style.border = bor.value + "px solid black"; 
});
