//THIS IS THE FILE TO PUT YOUR TRIGGERS

//Consider your inputs, your outputs, and your interface between these


//The classes referenced below come from my trained model https://teachablemachine.withgoogle.com/models/oWA7osCuu/
//create your own model at http://teachablemachine.withgoogle.com 
//If you remix this project place the model's URL below
let URL = 'https://teachablemachine.withgoogle.com/models/oWA7osCuu/';

//variable to hold our audio file - URL is from the assets folder
var audio = new Audio('https://cdn.glitch.com/346851f9-6315-47e0-8bdb-bb91e3062b27%2Fohno.mp3?v=1588132464276');
           
function triggers(data){
  
  //for my own model, class 0 is 'hands on head' and class 1 is 'nothing'

  //You may have to tweak the probabilities
  
  //data[0] is my 'hands on head' class
   if(data[0].probability > 0.75){
      audio.play(); //play sound 'oh no!'
  }
        
  //data[1] is my 'nothing' class
  if(data[1].probability > 0.75){
    
    
  }  
  
}