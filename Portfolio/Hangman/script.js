
 




const letterContainer = document.getElementById("letter-container");
const optionsContaner = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas"); 
const resultText= document.getElementById("result-text");


//options values for buttons

let options = {
    actions:["Tzeduka","Pray","Aliya"],
    places:["Synagouge", "Jerusalem","Tzefat","Hebron","Tiberias"],
    holidays:["Succot","Purim","Pesach"],
    things:["Kippa","Tzit-Tzit","Mezuza","Candles"]
}