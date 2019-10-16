console.log("Up and Running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!");
} else {
	alert("sorry try again");
}