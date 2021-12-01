var $ = function (id) 
{
    return document.getElementById(id);
};

var vowels = function () {
	var stringEntry = $("phrase").value;
	
	stringEntry = stringEntry.toUpperCase();
	
	if (stringEntry === "" ) {
		alert("Please enter a phrase");
	}
	else{
		var intVowes = 0;
		for (var intCnt = 0; intCnt < stringEntry.length; intCnt ++) {
			if (stringEntry.substring(intCnt, intCnt+1) === "E") {
				intVowes ++;
			}
			if (stringEntry.substring(intCnt, intCnt+1) === "I") {
				intVowes ++;
			}
			if (stringEntry.substring(intCnt, intCnt+1) === "O") {
				intVowes ++;
			}
			if (stringEntry.substring(intCnt, intCnt+1) === "U") {
				intVowes ++;
			}
			if (stringEntry.substring(intCnt, intCnt+1) === "A") {
				intVowes ++;
			}
			if (stringEntry.substring(intCnt, intCnt+1) === "Y") {
				intVowes ++;
			}
		}
		
		
		$("output").value = "There are " + intVowes + " vowels";
		
		
	}
	
	
	
};



var consonants = function () {
	var stringEntry = $("phrase").value;
	stringEntry = stringEntry.toLowerCase();
	if (stringEntry === "" ) {
		alert("Please enter a phrase");
	}
	else {
		intConsonants = 0;
		for (var intCnt = 0; intCnt < stringEntry.length; intCnt ++) {
			switch (stringEntry.substring(intCnt, intCnt+1)) {
				case "a":
				case "u":
				case "i":
				case "o":
				case "y":
				case "e":
				case " ":
					break;
				default:
					intConsonants++;
					break;
			}
		}
		$("output").value = "There are " + intConsonants + " consonants";
	}
	
	
};




var reverse = function () {
	var stringEntry = $("phrase").value;
	stringReverse = "";
	if (stringEntry === "" ) {
		alert("Please enter a phrase");
	}
	else {
		intConsonants = 0;
		for (var intCnt = 0; intCnt < stringEntry.length; intCnt ++) {
			stringReverse += stringEntry.substring(stringEntry.length - 1 - intCnt, stringEntry.length - intCnt);
			
		}
		$("output").value = stringReverse;
	}
	
	
};


var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
};

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
};