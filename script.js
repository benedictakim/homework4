var anyquestions = document.getElementById("questions");
var currentquestionsIndex = 0;
var currentanswerIndex = 0;
var choices = document.getElementById("choices");
var timeleft = 75;
var timedisplay = document.getElementById("timeleftdisplay");

var startquiz = document.getElementById("start");
startquiz.addEventListener("click", timer);
startquiz.addEventListener("click", hidestart);
startquiz.addEventListener("click", questiondisplay);

function timer () {
    var starttimer = document.getElementById("timeplaceholder");
    starttimer.setAttribute("class", "hide");
        timeleftdisplay.removeAttribute("class");
    var timer=setInterval(timertimer, 1000); 
    function timertimer() {
        timeleft=timeleft-1;
        timeleftdisplay.textContent = "Time: "+timeleft;
    }
}

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
        choicebutton.onclick=rightwrong;
        document.getElementById("choices").append(choicebutton);
    });    
}

//On choicesubmit: display right/wrong answer, display next question, 10 seconds off if wrong (needs to be debugged)
function rightwrong () {
   var choiceclicked = document.getElementById("choices");
   var currentquestions = [currentquestionsIndex];
    if (this.value !== currentquestions.answer) {
      answer.textContent = "Wrong!"
      timeleft-=10
      if (timeleft<0){
        timeleft=0;
      }
      timeleftdisplay.textContent=timeleft;
      function decreasetime () {
        var timer=setInterval(timertimer, 1000); 
        function timertimer() {
          timeleft=timeleft-10;
          timeleftdisplay.textContent = "Time: "+timeleft;
        }
      }
    }else{
      answer.textContent = "Correct!"      
        }
        currentquestionsIndex++
        if (currentquestionsIndex===questions.length){
          endquiz();
        }else{
          questiondisplay();
        }
}

//game over, enter name and save name and score, then save score to local storage and then display high score page
function endquiz () {
  clearInterval(timeleft);
  var alldonescreen = getElementById("gameover");
  alldonescreen.removeAttribute("class");
  var finalscore = getElementById("finalscore");
  finalscore.textContent = `Your final score is ${timeleft}`;
  anyquestions.setAttribute("class", "hide");
}

function savehighscore (){
  var initials=document.getElementById("initials").value.trim();
  if (initials !== ""){

  }
}
//high score page: display name and score with button to "go back"/"play again" and "clear high score"

//local storage.set item and local storage.




