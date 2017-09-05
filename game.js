var numberOfFaces = 5;

function generateFaces() {
	var theLeftSide = document.getElementById("leftSide");
	for (var i = 0; i < numberOfFaces; i++) {

		var smiley = document.createElement("img");
		smiley.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		var randomTopPosition = Math.random() * 401;
		randomTopPosition = Math.floor(randomTopPosition);
		smiley.style.top = randomTopPosition + "px";
		var randomLeftPosition = Math.random() * 401;
		randomLeftPosition = Math.floor(randomLeftPosition);
		smiley.style.left = randomLeftPosition + "px";
		theLeftSide.appendChild(smiley);
	}

	var theRightSide = document.getElementById("rightSide");
	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	var theBody = document.getElementsByTagName("body")[0];
	theLeftSide.lastChild.onclick =
	function nextLevel(event){
		event.stopPropagation();
		numberOfFaces += 5;
		while(theLeftSide.firstChild){
			theLeftSide.removeChild(theLeftSide.firstChild);
		}

		while(theRightSide.firstChild){
			theRightSide.removeChild(theRightSide.firstChild);
		}
		if(numberOfFaces==50){

			alert("You won!");
		}
		else
			generateFaces();

	};

	theBody.onclick = function gameOver() {
		alert("Game Over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}; 
}