window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let sum = parseInt(stringA) + parseInt(stringB);

	document.getElementById("resultNumber").value = sum;
};
