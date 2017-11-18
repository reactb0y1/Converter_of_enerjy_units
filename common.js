var KH = document.getElementById("KH").value;
var JL = document.getElementById("JL").value;
var CL = document.getElementById("CL").value;

var KH_to_JL = KH * 3600000;
var KH_to_CL = KH * 859.8;
var JL_to_KH = JL * 1/3600000;
var JL_to_CL = JL * 1/4187;
var CL_to_KH = CL * 1/859.8;
var CL_to_JL = CL * 4187;


$("#calculation_KH").click(function() {
	$("#KH_to_JL").text(KH_to_JL);
	$("#KH_to_CL").text(KH_to_CL);
})

$("#calculation_JL").click(function() {
	$("#JL_to_KH").text(JL_to_KH);
	$("#JL_to_CL").text(JL_to_CL);
})

$("#calculation_CL").click(function() {
	$("#CL_to_KH").text(CL_to_KH);
	$("#CL_to_JL").text(CL_to_JL);
})




// num1 = document.getElementById('num1').value;