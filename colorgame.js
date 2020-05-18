var colors = [];
var squares=document.querySelectorAll(".square");
var colorDisplay= document.querySelector("#mainColor");
var resultDisplay=document.getElementById("result");
var newGame = document.querySelector("#newGame");
var header=document.querySelector("#header");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var modeButtons=document.querySelectorAll(".mode");
var pickedColor = colors;
var gameDiff=6;

setupModeButtons();
colorString();
reset();


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "EASY") {
          gameDiff = 3;
          squares[3].style.display="none";
          squares[4].style.display="none";
          squares[5].style.display="none";
        } else {
          gameDiff = 6;
          squares[3].style.display="block";
          squares[4].style.display="block";
          squares[5].style.display="block";
        }
        colorString();
        reset();
      });
    }
  }

function colorString() {
  for (let i = 0; i < gameDiff; i++) {
    colors[i]="rgb("+ random(0, 255) + ", " + random(0, 255) + ", "+random(0, 255)+")" ;   
} 
}  




function reset() {
  for (let i = 0; i < gameDiff; i++) {
    var pickedColor = colors[random(0,i)];
    colorDisplay.textContent=pickedColor;
          // add colors to squares
      squares[i].style.backgroundColor=colors[i];   
          // add click event to squares
      squares[i].addEventListener("click", function() {
          var clickedColor=this.style.backgroundColor;
          console.log(clickedColor,pickedColor);
           if (clickedColor==pickedColor) {
              resultDisplay.textContent="CORRECT!";
              alert("Bravo!");  
              changeColors(clickedColor);   
              newGame.textContent="PLAY AGAIN?";       
            }
            else {
              this.classList.toggle("wrongSquare");
              resultDisplay.textContent="Try Again";
           }
        });
  }
}


newGame.addEventListener("click", function (){
  location.reload();
});


function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=color;
    header.style.backgroundColor=color;
  }
}
