function plus() {

	var result = 0;
	var num1 = 0;
	var num2 = 0;

	// num1 = $("#num1").value;
	// num2 = $("#num2").value;
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	console.log(num1);

	result = +num1 + +num2;

	console.log(result);

	$("#result").text(result);
}
