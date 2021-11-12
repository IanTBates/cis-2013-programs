var booleanRunning = true;

var intMax, intMin, intRandom, intGuess, intCount;
var intScore , intPossibleScore;

var intArrayGuesses = [];


while (booleanRunning) {


/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = prompt("Enter the low number of the guessing range");

while(isNaN(intMin) || intMin < 0){
	if (intMin == "stop") {
		booleanRunning = false;
		break;
	}
	intMin = prompt("Enter the low number of the guessing range");
}
if (!booleanRunning) {
	break;
}


intMin = parseInt(intMin);	//makes min an integer




/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = prompt("Enter the high number of the guessing range");

while(isNaN(intMax) || intMax < intMin + 2){
	if (intMax == "stop") {
		booleanRunning = false;
		break;
	}
	intMax = prompt("Enter the high number of the guessing range");
}

if (!booleanRunning) {
	break;
}

intMax = parseInt(intMax);  //makes max an integer

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount = 1;		//not iterated in guess, but when wrong; first guess does not increment.
intArrayGuesses = [];
intArrayGuesses.length = intMax - intMin; 	//set the array size to possible numbers guessed
intScore = parseInt(Math.log2(intArrayGuesses.length)) * 100; //assume halving, so log base 2
intPossibleScore = intScore;

//calls the guess function, necessary for declaring intGuess before while loop
guess();
intScore += parseInt(Math.log2(intScore)*3); //gives back points for first guess
					 
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

while (intGuess != intRandom) {
	intCount++;
	if (intGuess > intRandom) {
		alert("Guess is too high, try lower");
	}
	if (intGuess < intRandom) {
		alert("Guess is too low, try higher");
		
	}
	if (!booleanRunning) {
	break;
	}
	guess();
	
}
if (!booleanRunning) {
	break;
}


// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!\n You scored " + intScore + " points out of a possible " + intPossibleScore);

}


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

function guess(){	
	intGuess = parseInt(prompt("Enter your guess"));
	while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
		if (intGuess == "stop") {
		booleanRunning = false;
		break;
		}
		intGuess = parseInt(prompt("Enter your guess"));
	}
	if (!booleanRunning) {
	return;
	}
	
	intGuess = parseInt(intGuess);
	
	//declared and reset for each guess
	var booleanInList = false;
	
	//checks if the number has already been guessed by looping through the array
	intArrayGuesses.forEach((intGuessed) => {
		if (intGuessed == intGuess && !booleanInList) {
			alert(intGuess + " has already been guessed");
			booleanInList = true;	// change from false to true indicates presence of guess in the already guessed array
		}
	});
	if (!booleanInList) {
		intArrayGuesses.push(intGuess); //adds the guess to the array
	}
	
	//decreases score based on how many points have already been lost, higher scores loose more.
	if(intScore > intPossibleScore/2){
		intScore-= parseInt(Math.log2(intScore)*3);
	}
	else if (intScore > intPossibleScore/4) {
		intScore -= parseInt(Math.log2(intScore)*2);
	}
	else if (intScore > 0) {
		intScore-= parseInt(Math.log2(intScore));
	}
	//make sure the score is not less than 0
	if (intScore < 0) {
		intScore = 0;
	}
	//prompt("score = " + intScore);
}
