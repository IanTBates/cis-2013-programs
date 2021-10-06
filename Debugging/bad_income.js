var $ = function (id) 
{
    return document.getElementById(id);
}

var calculateIncome = function () 
{
    var floatAnnualIncome = parseInt($("annualIncome").value);
    var intUserAge = parseInt($("userAge").value);
    var floatTaxRate, floatAnnualTax;
    if (intUserAge >= 65)
    {
    	if (floatAnnualIncome <= 30000)
    	{
    		floatTaxRate = 0.025;
    	}
    	else
    	{
    		if(floatAnnualIncome >= 30000 && floatAnnualIncome <= 75000)
    		{
    			floatTaxRate = 0.05;
    		}
    		else
    		{
    			floatTaxRate = 0.20;
			}
		}
    } 
    else
    {
    	if (floatAnnualIncome <= 30000)
    	{
    		floatTaxRate = 0.05;
    	} else {
			if (floatAnnualIncome >= 30000 && floatAnnualIncome <= 75000)
			{
				floatTaxRate = 0.10;
			}
			else
			{
				floatTaxRate = 0.20;
			}
		}
	}

	floatAnnualTax = floatAnnualIncome * (floatTaxRate);

	$("annualTax").value = floatAnnualTax;


	alert ("Your annual income tax this year is $" + floatAnnualTax  +"\nBased upon an annual income of $"+ floatAnnualIncome+
	"\nAnd a tax rate of " +floatTaxRate+ "% \nNote: Tax rate is based upon your age");
	
}

window.onload = function () 
{
    $("annualIncome").value = "";
    $("userAge").value = "";
    $("annualTax").value = "";
    $("calculate").onclick = calculateIncome;
    $("annualIncome").focus();
}