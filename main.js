var nextBtn = document.getElementById('next-question');
var prevBtn = document.getElementById('prev-question');

nextBtn.onclick = goToNextQuestion;
prevBtn.onclick = goToPrevQuestion;

function goToNextQuestion() {
	var question = document.getElementById('question');
	var currentQuestionNumber = Number(question.getAttribute("data-question-number"));

	if (currentQuestionNumber == 35) {
		nextBtn.setAttribute('disabled', 'true')
	} else {
		var nextQuestionNumber = currentQuestionNumber + 1;
		question.setAttribute("data-question-number", nextQuestionNumber);
		updatePictures(nextQuestionNumber);
	}
	prevBtn.removeAttribute('disabled')
}

function goToPrevQuestion() {
	var question = document.getElementById('question');
	var currentQuestionNumber = Number(question.getAttribute("data-question-number"));
	if (currentQuestionNumber == 1) {
		prevBtn.setAttribute('disabled', 'true')
	} else {
		var prevQuestionNumber = currentQuestionNumber - 1;
		question.setAttribute("data-question-number", prevQuestionNumber);
		updatePictures(prevQuestionNumber);
	}
	nextBtn.removeAttribute('disabled')
}

function updatePictures(number) {

	var question = document.getElementById('question');
	question.setAttribute('src', 'img/q' + number + '.png')


	var a = document.getElementById('choice-a');
	var b = document.getElementById('choice-b');
	var c = document.getElementById('choice-c');
	var d = document.getElementById('choice-d');
	var e = document.getElementById('choice-e');
	var f = document.getElementById('choice-f');

	a.setAttribute('src', 'img/q' + number + 'a.png')
	b.setAttribute('src', 'img/q' + number + 'b.png')
	c.setAttribute('src', 'img/q' + number + 'c.png')
	d.setAttribute('src', 'img/q' + number + 'd.png')
	e.setAttribute('src', 'img/q' + number + 'e.png')
	f.setAttribute('src', 'img/q' + number + 'f.png')

}



function goToQusetion(num) {
	var question = document.getElementById('question');
	var currentQuestionNumber = Number(question.getAttribute("data-question-number"));

	if (currentQuestionNumber == num) {
		updatePictures(currentQuestionNumber);
	} else {
		currentQuestionNumber = 1;
	}
}

