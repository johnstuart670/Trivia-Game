
// List of variables being used

// These variables will update based on the number of right or wrong answers
var correctAnswers = 1;
var wrongAnswers = 1;
var correctPercent = correctAnswers/wrongAnswers ;
// Use this to track if the game was completed early or not
var finishClicked = false;

// array to hold boolean terms if the answers were correct or not
var answerHold = [];

// variables to make it easier to hide/unhide sections
var quizResults = $("#quizResults");
var timer = $("#timer");
var netCarbs = $("#netCarbs");
var quiz = $("#quiz");
var textWelcome = $("#textWelcome");
var textRunning = $("#textRunning");
var textFinished = $("#textFinished");
var h2Welcome = $("#h2Welcome");

// functions to call later

// Get things started
function setUp (){
	// Hide the things we want hidden at the start...
quizResults.hide();
quiz.hide();
textRunning.hide();
textFinished.hide();
timer.hide();
// Show the Welcome Text (allows for 1 function instead of 2)
textWelcome.show();
h2Welcome.show();
netCarbs.show();
// Run the nested function to reset the values
resetValues();
console.log("The setUp function has run")
};

// set values to the original values
function resetValues(){
	correctAnswers = 1;
	wrongAnswers = 1;
	finishClicked = false;
	console.log("The value and boolean Variables have been reset")
}

// Function that defines the experience during the quiz
function quizStart(){
	// move the window to the top
	window.scrollTo(0,0);
	// Show the IDs that we want to pop up
quiz.show();
textRunning.show();
timer.show();
//hide the things we don't want to show while the quiz timer is running
textWelcome.hide();
h2Welcome.hide();
netCarbs.hide();
// start the timer

// code code code code
// code code code code
// code code code code
// code code code code
// code code code code
// code code code code
// code code code code
console.log("The quiz has started!")
};

// Function that shows the results of the quiz, adds up the right and wrong elements and shows everything.
function quizEnd(){
	// Show results and textFinished 
	quizResults.show();
	textFinished.show();
	// hide the textRunning
	textRunning.hide();
// run the counting function
countFunction();

// scroll the window back up to the top
window.scrollTo(0,0);
// checking that this works
console.log("The quiz is over!")
}

// function that counts up the right answers
function countFunction (){

}

// Start off with a function
$(document).ready(function(){
// run the setUp function 
setUp();

// Button onClick events

// start Quiz button clicks
$("#startBtn").on("click", function(){
	quizStart();
});
// end quiz button clicks
$("#finishBtn").on("click", function(){
finishClicked = true;
console.log("You finished early!");
quizEnd();
});

$("#resetBtn").on("click", function(){
setUp();
});


// End function tracker
});