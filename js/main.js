var numberOfCorrectAnswers = 0;
if (!parseInt(localStorage.getItem('arithmeticCorrect'))) {
	localStorage.setItem('arithmeticCorrect', numberOfCorrectAnswers);
}
showNumberOfCorrect();
var stage = false; 

function correct() {
	var answerContainer = document.getElementById('input');
	var answer = answerContainer.value;
	if (answer == localStorage.getItem('arithmeticAnswer') ){
		stage = true;
		answerContainer.style.backgroundColor = "#95ff60";
		answerContainer.style.borderColor = "#95ff60";
	    document.getElementById("submit_button").disabled = false;
	    document.getElementById("input").disabled = true;
	    document.getElementById("test-button").disabled = true;

	    document.getElementById("submit_button").style.backgroundColor = "#6cb6ff";
	    document.getElementById("test-button").style.backgroundColor = "#e5ecfc";

	    numberOfCorrectAnswers++;
	    localStorage.setItem('arithmeticCorrect', numberOfCorrectAnswers);
	    showNumberOfCorrect();
	    
	    var correctAudio = document.getElementById("correctAudio"); 
	    correctAudio.play(); 
	} else {
		stage = true;
		answerContainer.style.backgroundColor = "#ffb5b5";
		answerContainer.style.borderColor = "#ffb5b5";
	    document.getElementById("submit_button").disabled = false;
	    document.getElementById("input").disabled = true;
	    document.getElementById("test-button").disabled = true;
	    document.getElementById("submit_button").style.backgroundColor = "#6cb6ff";
	    document.getElementById("test-button").style.backgroundColor = "#e5ecfc";

	    numberOfCorrectAnswers = 0;
	    localStorage.setItem('arithmeticCorrect', numberOfCorrectAnswers);
	    showNumberOfCorrect();
	    
	    var wrongAudio = document.getElementById("wrongAudio"); 
	    wrongAudio.play();
	    
	}
}
function showNumberOfCorrect() {
	numberOfCorrectAnswers = parseInt(localStorage.getItem('arithmeticCorrect'));
	if (numberOfCorrectAnswers == 0) {
		for (var i = 1; i <= 10; i++)
			document.getElementById('answer'+i).style.backgroundColor = "#e5ecfc";
	} 
	if (numberOfCorrectAnswers >= 1) {
		document.getElementById('answer1').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 2) {
		document.getElementById('answer2').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 3) {
		document.getElementById('answer3').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 4) {
		document.getElementById('answer4').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 5) {
		document.getElementById('answer5').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 6) {
		document.getElementById('answer6').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 7) {
		document.getElementById('answer7').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 8) {
		document.getElementById('answer8').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 9) {
		document.getElementById('answer9').style.backgroundColor = "#95ff60";
	}
	if (numberOfCorrectAnswers >= 10) {
		document.getElementById('answer10').style.backgroundColor = "#95ff60";
		var winAudiop = document.getElementById("winAudio"); 
		winAudiop.play();
	}
	
	document.onkeyup = function(e){
	    if (e.which == 13 && stage == false) {
	    	document.getElementById('test-button').click();
	    } else if (e.which == 13 && stage == true) {
	    	document.getElementById('submit_button').click();
	    } 
		e = e || window.event;
		if (e.code === 'F5') {
		    numberOfCorrectAnswers = 0;
		    localStorage.setItem('arithmeticCorrect', numberOfCorrectAnswers);
		    alert("f5 pressed");
	    }
	}
}