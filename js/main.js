console.log("Up and Running!");

cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
cardsInPlay = [];

for(var i = 0; i < cards.length; i++) {
	var newCardElement = document.createElement("img");
	newCardElement.setAttribute('src',"images/back.png");
	newCardElement.setAttribute('data-id', i);
	newCardElement.addEventListener('click', flipCard);
	document.getElementById("game-board").appendChild(newCardElement);
}

function flipCard() {
	cardsInPlay.push(cards[this.getAttribute('data-id')].rank);
	this.setAttribute('src',cards[this.getAttribute('data-id')].cardImage);
	console.log("User flipped: " + cards[this.getAttribute('data-id')].rank);
	console.log("User flipped: " + cards[this.getAttribute('data-id')].suit);
	console.log("User flipped: " + cards[this.getAttribute('data-id')].cardImage);
	checkForMatch();
}
function checkForMatch() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
	
}