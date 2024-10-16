let gameSeq=[];
let userSeq=[];


// randome btn choose krne ke liye ek color bnyge
let btn = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); //  kisi bhi key ko press kre toh  update hoajye key and h2 ko access kar rhe h 
// game sart karne ke liye yeah code hai.
document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

// yha pr ek btn ka function bnyge 
function gameFlash(btn){
    btn.classList.add("flash");
// usi class remove krne ka liye timeout lga dege
    setTimeout(function () { // function ka kam hai  btn class ko flash ko remove kr dega
        btn.classList.remove("flash");
    }, 250); // kitne time me remove hoga 1second mein
}
function userFlash(btn){
    btn.classList.add("userflash");
// usi class remove krne ka liye timeout lga dege
    setTimeout(function () { // function ka kam hai  btn class ko flash ko remove kr dega
        btn.classList.remove("userflash");
    }, 250); // kitne time me remove hoga 1second mein
}
// flash  button and levelup 
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`; //  key press krne ke baad level update hojte
   // rnadom index ko choose krna hai  ke liye ek rnadom variable bna lege
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   // random color btn acces krne ke liye
   let randbtn = document.querySelector(`.${randColor}`)
  // console.log(randIdx);
   //console.log(randColor);
  // console.log(randBtn)
  gameSeq.push(randColor);
  console.log(gameSeq);
   // random btn choose krge tb bich me 
    gameFlash(randBtn);                      // user se click krve button flash ho jaye

}

function checkAns(){
   // console.log("curr level : ", level);
   let idx = level-1;

   if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        levelUp();
    }
   } else {
    h2.innerText = 'Game over! Press any key to start';


   }
}

// add button evenlister

function btnPress () {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id") ///*id isliye use every color nikalne ke liye id use kiye hai*/
    userFlash.push(userColor);


    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
 btn.addEventListener("click", btnPress);
}
