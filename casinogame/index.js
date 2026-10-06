const inputcontainer = "input-container"
const continuebutton = "continue-button"
const crapsgamepane = "craps-game-pane"


document.getElementById("continue-button").addEventListener("click", function() {
alert("Continue button clicked!");
});

function registerscrapplayer() {
   let scrapusername = document.getElementById(inputcontainer).value; 
alert("Welcome " + scrapusername + " to the Craps Game!");
removeRegistrationPanel()
 ShowMainGameSection()
}

function ShowMainGameSection() {
   document.getElementById(crapsgamepane).style.display = "block"; 
}