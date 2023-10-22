console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";

let msg = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerHTML != ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + "Won";
      msg = true;
      document
        .querySelector(".img-box")
        .getElementsByTagName("img")[0].style.width = "156px";
        gameOver.play();
    }
  });
};

//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (element.innerText == "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!msg) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// creating a reset button
const reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    msg=false;
    document.getElementsByClassName("info")[0].innerText =
    "Turn for " + turn;
    document.getElementsByTagName("img")[0].style.width = "0px";

})


let menuBtn=document.getElementById("menu");
let visibility=false;
menuBtn.addEventListener("click",()=>{
    let dropDown=document.getElementById("dropdown")
    if(visibility){
        dropDown.style.display="none";
        
    }else{
        dropDown.style.display="grid";
    }
    visibility=!visibility;
})
  