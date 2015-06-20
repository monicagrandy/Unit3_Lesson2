//Exercise 1
//The application below has 6 global variables. Modify the code so that it works with only one global var
//Original:
var answer1 = "blue",
	answer2 = "no",
	answer3 = "yes";

var userAnswer1 = prompt("what color is the sky?");
	if(userAnswer1 === answer1){
		alert("Correct");
	}
	else {
		alert("Sorry, that was wrong");
	}
var userAnswer2 = prompt("Do cows fly?");
	if(userAnswer2 === answer2) {
		alert("Correct");
	}
	else {
		alert("Sorry, that was wrong");
	}
var userAnswer3 = prompt("Do birds fly?");
	if(userAnswer1 === answer3) {
		alert("Correct");
	}
	else {
		alert("Sorry, that was wrong");
	}

//Refactored w/ closure
function myQuiz(){
	return function(){
		var answer1 = "blue",
		answer2 = "no",
		answer3 = "yes";

		var userAnswer1 = prompt("what color is the sky?");
			if(userAnswer1 === answer1){
				alert("Correct");
			}
			else {
			alert("Sorry, that was wrong");
			}
		var userAnswer2 = prompt("Do cows fly?");
			if(userAnswer2 === answer2) {
				alert("Correct");
			}
			else {
				alert("Sorry, that was wrong");
			}
		var userAnswer3 = prompt("Do birds fly?");
			if(userAnswer3 === answer3) {
				alert("Correct");
			}
			else {
				alert("Sorry, that was wrong");
			}
	} //anonymous function closes
} //myQuiz funtion closes

var newQuiz = myQuiz();
newQuiz();

//Exercise 2
//Below is an array of names. Write a function that outputs the next item in the array every time it is invoked
function showNames(){
	var names = ["William","Cindy","Maureen","Brenden"];	
		return function () {
			return names.shift();
		}	
	}
var nextName = showNames();	
nextName();
nextName();
nextName();