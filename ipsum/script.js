// Crowley quotes arrays

// Book of Lies:

let wordArray = 
["O!",
"nothing",
"God",
"is",
"night",
"93",
"and",
"death",
"Do What Thou Wilt",
"Aiwass",
"bliss",
"for",
"Word",
"Abyss",
"holy",
"man",
"life",
"ABRAHADABRA",
". Amen.",
"O",
"Universe",
"Will",
"heaven",
"die",
"love",
"can",
"if",
"thou",
"truth",
"GOD",
"good",
"CYNOXEC",
"ΩΦAΛΛE",
".......",
"Laylah",
"dreams",
"MAGICK",
"thee"];

let sentenceArray =
[
    "?",
    "!",
    "The broken manifests Light.",
    "Do What Thou Wilt.",
    "Thy will is done.",
    "Thoughts are false.",
    "Mind is a disease of semen.",
    "Die Daily.",
    "Motion is relative: there is Nothing that is still.",
    "Verily, love is death, and death is life to come.",
    "Be not entangled in the universal lie, O child of Truth!",
    "It is not necessary to understand; it is enough to adore.",
    "Let us create nothing but GOD!",
    "Let us create therefore without fear; for we can create nothing that is not GOD.",
    "It is Pure Chance that rules the Universe; therefore, and only therefore, life is good.",
    "The Way out is THE WAY. Get out. For OUT is Love and Wisdom and Power.",
    "Language was made for men to eat and drink, make love, do barter, die.",
    "Love is all virtue, since the pleasure of love is but love, and the pain of love is but love. Love taketh no heed of that which is not and of that which is.",
    "Dreams are imperfections of sleep; even so is consciousness the imperfection of waking.",
    "Consciousness is a symptom of disease.",
    "All that moves well moves without will."
]

// Select elements

let generateButton = document.querySelector("#generateButton");
let tabContent = document.querySelectorAll(".tabContent");
let oracleContainer = document.querySelector("#oracleContainer");
let ipsumContainer = document.querySelector("#ipsumContainer");
let tabs = document.querySelector(".tabs");
let generateButtons = document.querySelectorAll(".generateButtons");
let tabLinks = document.querySelectorAll(".tabLinks");
let wordInput = document.querySelector("#wordInput");
let submit = document.querySelector("#submit");

// Lorem ipsum generator

generateIpsum.addEventListener("click", function(e){
    e.preventDefault();
    let output = "";
    for (let i = 0; i < wordInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * wordArray.length);
        output += wordArray[randomNumber] + " ";
        ipsumContainer.innerText = output;
      }  
})
