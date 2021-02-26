window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

const button = document.getElementById("button2");
button.addEventListener("click", window.myClickFunction);


