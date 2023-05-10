const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById
("buttonPlayStop");

let scoreInterval;
let score = 0; 

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    player.classList.add("playerJump");
  }
});

player.addEventListener('animationend', () => {
	player.classList.remove("playerJump");
});

function pauseAnimation(){
	cactus.style.animationPlayState = "paused";
	player.style.animationPlayState = "paused";
	background.style.animationPlayState = "paused";
}

function pauseGame(){
	
    pauseAnimation();
	stopScore();


}

function stopScore() {
    clearInterval(scoreInterval);
}

function resumeAnimation() {
	cactus.style.animationPlayState = "running";
	player.style.animationPlayState = "running";
	background.style.animationPlayState = "running";
}

function resumeScore() {
    scoreInterval = setInterval(() => {
	score++;
	document.getElementById("score").innerText = score;
   }, 1000)
}

function resumeGame(){
    resumeAnimation();
	resumeScore();
}

buttonPlayStop.addEventListener("click", () => {
	if (buttonPlayStop.classList.contains("play")){
		resumeGame();
	}
	else{
		pauseGame();
	}
	buttonPlayStop.classList.toggle("play");
})

resumeScore();

const restartButton = document.getElementById("restartGame");

restartButton.addEventListener("click", restartGame)

function restartGame() {
	alert("A terminar la secundaria pibe");
	score = 0;
	document.getElementById("score").innerText = score;
	cactus.classList.remove("cactusMovement");
	void cactus.offsetWidth;
	cactus.classList.add("cactusMovement");
	
}

function resetScore(){
	
}