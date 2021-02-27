// your function goes here
//05 The Load Event

//asi no funciona con el load
document.querySelector("body").addEventListener("load", myFunction);
console.log(document.querySelector("body"));

//solo funciona indicando el onload al body en el html
function myFunction() {
	alert("loading finished...");
}
