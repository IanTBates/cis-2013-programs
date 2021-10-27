var $ = function (id) 
{
    return document.getElementById(id);
}

doStuffComputer = function()
{
   output1 = whileFunction();
   forFunction();
};

function whileFunction() {
	var intCounter = 1;
	var stringFizzBuzzWhile = "";
	while(intCounter <= 100){
	  if( intCounter % 15 == 0){
		//console.log("FizBuzz");
		stringFizzBuzzWhile += "FizzBuzz \n";
	  }
	  else if ( intCounter % 3 == 0){
		//console.log("Fizz");
		stringFizzBuzzWhile += "Fizz \n";
	  }
	  else if ( intCounter % 5 == 0){
		//console.log("Buzz");
		stringFizzBuzzWhile += "Buzz \n";
	  }
	  else {
		//console.log(i);
		stringFizzBuzzWhile += intCounter + " \n";
	  }
	  intCounter++;
	}
	alert(stringFizzBuzzWhile);
}

function forFunction(){	
	var stringFizzBuzzFor = "";
	for (var i = 1; i <= 100; i++){
		if( i % 15 == 0){
		  //console.log("FizBuzz");
		  stringFizzBuzzFor += "FizzBuzz \n";
		}
		else if ( i % 3 == 0){
		  //console.log("Fizz");
		  stringFizzBuzzFor += "Fizz \n";
		}
		else if ( i % 5 == 0){
		  //console.log("Buzz");
		  stringFizzBuzzFor += "Buzz \n";
		}
		else {
		  //console.log(i);
		  stringFizzBuzzFor += i + " \n";
		}
	}
	alert(stringFizzBuzzFor);
}


window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
};