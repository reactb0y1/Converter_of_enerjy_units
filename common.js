var KH = 0;
var KH_to_JL = 0; 
var KH_to_CL = 0; 
var JL_to_KH = 0;
var JL_to_CL = 0;
var CL_to_KH = 0;
var CL_to_JL = 0;

$("#calculation_KH").click(function() {
    KH = document.getElementById("KH").value;
    
    KH_to_JL = KH * 3600000;
    KH_to_CL = KH * 859.8;

    $("#KH_to_KH").text(KH);
    $("#KH_to_JL").text(KH_to_JL);
    $("#KH_to_CL").text(KH_to_CL);
});

$("#calculation_JL").click(function() {
	JL = document.getElementById("JL").value;

	JL_to_KH = JL * 1/3600000;
	JL_to_CL = JL * 1/4187;

	$("#JL_to_KH").text(JL_to_KH);
	$("#JL_to_JL").text(JL);
	$("#JL_to_CL").text(JL_to_CL);
})

$("#calculation_CL").click(function() {
	var CL = document.getElementById("CL").value;

	var CL_to_KH = CL * 1/859.8;
	var CL_to_JL = CL * 4187;

	$("#CL_to_KH").text(CL_to_KH);
	$("#CL_to_JL").text(CL_to_JL);
	$("#CL_to_CL").text(CL);
})