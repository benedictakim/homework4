//click "Start Quiz" - timer counts down from 75 seconds or 75,000 msec
//var quiztime = "75000"
// document.getElementById("start").onclick = function timer (){
//  (quiztime - 1000) % 60;
// }

var anyquestions = document.getElementById("questions");
var currentquestionsIndex = 0;
var choices = document.getElementById("choices");

//hide start screen, unhide the question section, then start timer, then show start time;; show all questions 
var startquiz = document.getElementById("start");
//startquiz.addEventListener("click", timer);
startquiz.addEventListener("click", hidestart);
startquiz.addEventListener("click", questiondisplay);

//startquiz functions

//funtion timer ();

function hidestart() {
    var startscreen = document.getElementById("startscreen");
    startscreen.setAttribute("class", "hide");
    document.getElementById("questions").removeAttribute("class");
}

function questiondisplay () {
    var currentquestion = questions[currentquestionsIndex];
    var questiontitleelement = document.getElementById("questiontitle");
    questiontitleelement.textContent = currentquestion.title;
    choices.innerHTML="";
    currentquestion.choices.forEach(function (choices, i) {
        var choicebutton = document.createElement("button");
        choicebutton.setAttribute("class", "choices");
        choicebutton.setAttribute("value", choices);
        choicebutton.textContent= i+1+". "+choices;
    });
}

//.appendchild


//Answer question, display right/wrong answer, display next question

//if wrong answer, decrease timer by 10 seconds or 10,000 msec

//if all questions answered or timer is 0, game over

//scoring: if all questions answered and time is >0, then score is 75 - timeleft

//game over, enter name and save name and score, then save score to local storage and then display high score page

//high score page: display name and score with button to "go back"/"play again" and "clear high score"






