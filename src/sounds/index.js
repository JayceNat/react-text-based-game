let buttonSound = new Audio("./sounds/button.mp3");
let clickSound = new Audio("./sounds/click.mp3");

let keys = [
	new Audio("./sounds/key1.mp3"),
	new Audio("./sounds/key2.mp3"),
	new Audio("./sounds/key3.mp3"),
	new Audio("./sounds/key4.mp3")
];

function button() {
	buttonSound.play();
}
function click() {
	clickSound.play();
}

function typeSound() {
	let i = Math.floor(Math.random() * keys.length);
	keys[i].currentTime = 0;
	keys[i].play();
}

export { button, click, typeSound };
