//conversion variable from years.
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
	floatAge = parseFloat(prompt("What is your age?")).toFixed(2);
	floatDays = floatAge * 325.25;
	intWeeks = parseInt(floatDays / 7);
	floatMonths = floatAge * 12;
	intFortnights = parseInt(intWeeks / 2);
	
	alert(floatAge + " years old means you are also: " +
		  floatDays.toFixed(2) + " days old, " +
		  intWeeks + " weeks old, " +
		  intFortnights + " fortnights old, "+
		  floatMonths.toFixed(2) + " months old");