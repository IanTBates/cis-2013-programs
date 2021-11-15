//Task 1
var arrayNames = ["John", "Robert", "Jimmy", "Bonzo"];
var arrayInstruments = ["bass", "vocals", "guitar", "drums"];

var stringOutput = "";

for (var i = 0; i < arrayNames.length; i++) {
	stringOutput += arrayNames[i] + " plays " + arrayInstruments[i] + "\n";
}

alert(stringOutput);


//task 2


var stringTimesTable = "";

for (var r = 1; r <= 12; r++ ) {
	for (var c = 1; c <=12; c++) {
		stringTimesTable += r*c + " ";
	}
	stringTimesTable += "\n";    //new line
}

alert(stringTimesTable);


//task 3


var arrayTimesTable = [];
var stringEvens = "";

for (var r = 1; r <= 12; r+=2) {
	arrayTimesTable[(r-1)/2] = [];
	for (var c = 1; c <=12; c+=2) {
		arrayTimesTable[(r-1)/2][(c-1)/2] = (r+1)*(c+1);
	}
}

arrayTimesTable.forEach(row => {
	stringEvens += row + "\n";
});


alert(stringEvens);