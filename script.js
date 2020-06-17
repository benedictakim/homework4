var anyquestions = document.getElementById("questions");
var currentquestionsIndex = 0;
var choices = document.getElementById("choices");
var timeleft = 75;

//<-----Start Quiz------------------------------------>
var startquiz = document.getElementById("start");
startquiz.addEventListener("click", timer);
startquiz.addEventListener("click", hidestart);
startquiz.addEventListener("click", questiondisplay);

function timer () {
    var starttimer = document.getElementById("timeplaceholder");
    starttimer.setAttribute("class", "hide");
    var timedisplay = document.getElementById("timeleftdisplay");
    timeleftdisplay.removeAttribute("class");
    var timer=setInterval(timertimer, 1000); 
    function timertimer() {
        timeleft=timeleft-1;
        timeleftdisplay.textContent = "Time: "+timeleft;
    }
}

//(help from tutor)
function hidestart() {
    var startscreen = document.getElementById("startscreen");
    startscreen.setAttribute("class", "hide");
    document.getElementById("questions").removeAttribute("class");
}

//(help from tutor and troubleshoot during officehour but need to fix list display of choices)
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
        document.getElementById("choices").append(choicebutton);
    });
}

//<------------------Progressing through the quiz-------------------------------------->

//On choicesubmit: display right/wrong answer, display next question, 10 seconds off if wrong (needs to be debugged)
function rightwrong () {
    var choiceclicked = document.getElementById("button.choices").addEventListener("click");
    var currentanswer = answer[currentanswersIndex];
    if (choiceclicked === currentanswer) {
      answer.textContent = "Correct!"
    } else {
      answer.textContent = "Wrong!"
      function decreasetime () {
        var timer=setInterval(timertimer, 1000); 
        function timertimer() {
          timeleft=timeleft-10;
          timeleftdisplay.textContent = "Time: "+timeleft;
        }
      }
    }
}

//if all questions answered or timer is 0, game over

//scoring: if all questions answered and time is >0, then score is 75 - timeleft

//game over, enter name and save name and score, then save score to local storage and then display high score page

//high score page: display name and score with button to "go back"/"play again" and "clear high score"






