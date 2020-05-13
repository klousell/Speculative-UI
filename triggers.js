//THIS IS THE FILE TO PUT YOUR TRIGGERS
var trivia = new XMLHttpRequest();
var questionNo = Math.floor(Math.random() * Math.floor(20));
var answer = "";

$('#correct').hide();
$('#incorrect').hide();

trivia.open('GET', 'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=boolean', true);
trivia.onload = function triviaAPI() {
  var data = JSON.parse(this.response);
  question = data.results[questionNo].question;
  if (trivia.status >= 200 && trivia.status < 400) {
    var questionDiv = document.getElementById('questions');//(data.results[0].question)
    answer = data.results[questionNo].correct_answer;
    console.log(answer)

    questionDiv.innerHTML = "<p>" + question + "</p>";
  }
}

trivia.send()
//Consider your inputs, your outputs, and your interface between these

//The classes referenced below come from my trained model https://teachablemachine.withgoogle.com/models/oWA7osCuu/
//create your own model at http://teachablemachine.withgoogle.com
//If you remix this project place the model's URL below
let URL = 'https://teachablemachine.withgoogle.com/models/V9pZl-mej/';

//'https://teachablemachine.withgoogle.com/models/5s44MwSud/'
//variable to hold our audio file - URL is from the assets folder
var audio = new Audio('https://cdn.glitch.com/346851f9-6315-47e0-8bdb-bb91e3062b27%2Fohno.mp3?v=1588132464276');

function triggers(data){

   if(data[0].probability > 0.85){
     $('#questions').hide();
      if(answer == "False") {
        $('#correct').show();
      } else {
        $('#incorrect').show();
        console.log(answer);
      }
  }

  if(data[1].probability > 0.85){
    $('#questions').hide();
    if(answer == "True") {
      $('#correct').show();
    } else {
      $('#incorrect').show();
      console.log(answer);
    }
  }

  if(data[2].probability > 0.85) {
  location.reload();
  }
}
