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
   var currentanswers = questions[currentquestionsIndex];
   var line = document.getElementById("line");
   line.removeAttribute("class");
    if (this.value !== questions.answer) {
      answer.textContent = "Wrong!";
      timeleft-=10
      if (timeleft<0){
        timeleft=0;
      };
    }else{
      answer.textContent = "Correct!"      
      };
currentquestionsIndex++
    if (currentquestionsIndex===questions.length || timeleft==0) {
      endquiz();
    }else{
      questiondisplay();
    }
}

//game over screen (need to debug - clock does not stop)
function endquiz () {
  clearInterval(timer);
  function timerstop() {
    timeleft=timeleft;
    timeleftdisplay.textContent = "Time: "+timeleft;
  };
  var endofquestions = document.getElementById("questions");
  endofquestions.setAttribute("class", "hide");
  var alldonescreen = document.getElementById("gameover");
  alldonescreen.removeAttribute("class");
  var finalscore = document.getElementById("finalscore");
  finalscore.textContent = `Your final score is ${timeleft}`;
  anyquestions.setAttribute("class", "hide");
  var savescore = document.getElementById("button");
  savescore.addEventListener("click", savehighscore);
}

//(eventlistener needs to be debugged + probably local storage + toggles to go back/play again and clear high score)
function savehighscore (){
  var unhidescores = document.getElementById("highscore")
  unhidescores.removeAttribute("class");
  var initials=document.getElementById("initials").value.trim();
  if (initials !== ""){
    let scoresArray = []
    localStorage.setItem('timeleft', JSON.stringify(scoresArray))
    const data = JSON.parse(localStorage.getItem('initials'))
    var unhidescores = document.getElementById("highscore");
    unhidescores.removeAttribute("class");
    scoresandinitials.textContent = 'timeleft' + 'iniitals';
  };
}