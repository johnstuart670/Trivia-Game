
// List of variables being used

// These variables will update based on the number of right or wrong answers
var score = 0;
var wrongAnswers = 5 - score;
var correctPercent = score / wrongAnswers;
// counter variables for the timer
var minutes = 1;
var seconds = 15;
// please update back to 75
var counter = 75;



// variables to make it easier to hide/unhide sections
var quizResults = $("#quizResults");
var timer = $("#timer");
var netCarbs = $("#netCarbs");
var quiz = $("#quiz");
var textWelcome = $("#textWelcome");
var textRunning = $("#textRunning");
var textFinished = $("#textFinished");
var h2Welcome = $("#h2Welcome");
var finishClicked = $("#finishClicked");

// functions to call later
// timer items:

function clockUpdate() {
	counter--;
	convertSeconds(counter);
	timer.text("Time Left: " + minutes + " Min " + seconds + " Sec")
	if (counter <= 0) {
		quizEnd();
	}
}

function convertSeconds(variable) {
	minutes = Math.floor(variable / 60);
	seconds = variable % 60;

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes === 0) {
		minutes = "00";
	}
	else if (minutes < 10) {
		minutes = "0" + minutes;
	}

	return minutes + ":" + seconds;
};

var answers = ["A", "B", "A", "C", "C"];
var tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  score = 0;
  for (var i=0; i<tot; i++)
		if(getCheckedValue("question"+i)===answers[i]) score += 1;
		$()
  return score;
}

function returnScore(){
	getScore();
	$("#correctAnswers").text(score);
	$("#wrongAnswers").text(tot - score);
	$("#percentCorrect").text((score / tot) * 100 + "%");
}

// Get things started
function setUp() {
	window.scrollTo(0, 0);
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
function resetValues() {
	correctAnswers = 1;
	wrongAnswers = 1;
	finishClicked.text("No");
	console.log("The value Variables have been reset")
	counter = 75;
	var minutes = 1;
var seconds = 15;
	timer.text("Time Left: " + minutes + " Min " + seconds + " Sec")
}

// Function that defines the experience during the quiz
function quizStart() {
	// move the window to the top
	window.scrollTo(0, 0);
	// Show the IDs that we want to pop up
	quiz.show();
	textRunning.show();
	timer.show();
	//hide the things we don't want to show while the quiz timer is running
	textWelcome.hide();
	h2Welcome.hide();
	netCarbs.hide();

	console.log("The quiz has started!")

	// start running the countdown
	clockupdate = setInterval(clockUpdate, 1000);

};

// Function that shows the results of the quiz, adds up the right and wrong elements and shows everything.
function quizEnd() {
	// clear out the timeOut variable
	clearInterval(clockupdate);
	// Show results and textFinished 
	quizResults.show();
	textFinished.show();
	// hide the textRunning
	textRunning.hide();

	returnScore();
	// scroll the window back up to the top
	window.scrollTo(0, 0);
	// checking that this works
	console.log("The quiz is over!")
}

// Start off with a function
$(document).ready(function () {
	// run the setUp function 
	setUp();

	// Button onClick events

	// start Quiz button clicks
	$("#startBtn").on("click", function () {
		quizStart();
	});
	// end quiz button clicks
	$("#finishBtn").on("click", function () {
		console.log("You finished early!");
finishClicked.text("Yes")
		quizEnd();
	});

	$("#resetBtn").on("click", function () {
		setUp();
	});

	// On click of a radio item add the class of checked

	// End function tracker
});