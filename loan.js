var $ = function (id) 
{
    return document.getElementById(id);
}


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
var floatMonthlyPayment, intLoanTerm, floatTotalCost;


 var calculate = function()
 {
	floatMonthlyPayment = $("monthly_payment").value;
	intLoanTerm = $("loan_length").value;
    floatTotalCost = parseFloat(floatMonthlyPayment) * parseInt(intLoanTerm);
    $("total_cost").value = floatTotalCost;
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}