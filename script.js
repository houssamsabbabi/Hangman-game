let keyboard = document.querySelector(".keyboard");
let inputDiv = document.querySelector(".input");
let hint = document.querySelector(".hint");
let hangmanDesign = document.querySelector(".hangman")
let letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let data = {
    Countries : ["MOROCCO", "FRANCE", "GERMANY", "EGYPT", "BRASIL", "USA", "CANADA", "AUSTRALIA"],
    Cities: ["RABAT", "PARIS", "MADRID", "FEZ", "BUDAPEST", "MISKOLC"],
    Films: ["THE GODFATHER", "AVATAR", "LIMIT LESS", "TITANIC", "TRANSPORTOR", "GLADIATOR"]
}

for(let i=0; i<letters.length; i++){
  let span = document.createElement("span");
  span.className = "letter-btn";
  span.setAttribute("data-letter", letters[i]);
  span.appendChild(document.createTextNode(letters[i]));
  keyboard.appendChild(span);
}

let objectKeys = Object.keys(data)
let objectKeysRandom = objectKeys[Math.floor(Math.random() * objectKeys.length)];
let objectValueRandom = data[objectKeysRandom][Math.floor(Math.random()*(data[objectKeysRandom].length))]

hint.appendChild(document.createTextNode(objectKeysRandom));

let valueArr = objectValueRandom.split(""); 

valueArr.forEach(element => {
  let span = document.createElement("span");
  if(element === " "){
    span.className = "space";
    span.appendChild(document.createTextNode(""));
  } else {
    span.appendChild(document.createTextNode(" "));
  }
    inputDiv.appendChild(span)
});

let keyboardBtn = document.querySelectorAll(".letter-btn");
let randomValue = Array.from(objectValueRandom);
let counter = 0;
let hangmanContainer = document.querySelector(".hangman");

keyboardBtn.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.target.classList.add("clicked")
    randomValue.forEach((element, ind) => {
      if(el.target.dataset.letter === element){
      let spanInput = document.querySelectorAll(".input span")
      spanInput[ind].appendChild(
        document.createTextNode(el.target.dataset.letter)
      );  
      }
    })
    let letterCheck = false;
     for (let i = 0; i < randomValue.length; i++) {
       if (randomValue[i] === el.target.dataset.letter) {
         letterCheck = true;
       }
     }
   if(!letterCheck){
      counter++;
      hangmanContainer.classList.add(`failed-${counter}`);
   }
   if(counter === 5){
     keyboard.classList.add("clicked")
   }
  })
})






