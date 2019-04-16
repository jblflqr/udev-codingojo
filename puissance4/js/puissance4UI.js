//puissance 4 UI
var redImg = "<img src='img/red.png' class='img-rounded ' />";
var yellowImg = "<img src='img/yellow.png' class='img-rounded '/>";
var whiteImg = "<img src='img/white.png' class='img-rounded '/>";

//the game model
var puissance4 = new Puissance4();

//start UI.
$(document).ready(function() {
	
	$("#btn0").on("click", function() {
		playColumn(0);
	});
	$("#btn1").on("click", function() {
		playColumn(1);
	});
	$("#btn2").on("click", function() {
		playColumn(2);
	});
	$("#btn3").on("click", function() {
		playColumn(3);
	});
	$("#btn4").on("click", function() {
		playColumn(4);
	});
	$("#btn5").on("click", function() {
		playColumn(5);
	});
	$("#btn6").on("click", function() {
		playColumn(6);
	});
	
	refreshUI();
});


/** Methode to show the winner in alert Box */
function showWinner(){
	if(puissance4.winner != ""){
		for(i = 0; i < 7; i++){
			$("#btn"+i).hide();
		}
		var winner = "";
		if(puissance4.winner == "R"){
			winner = redImg + " &nbsp;Red WIN";
		}
		if(puissance4.winner == "Y"){
			winner = yellowImg + " &nbsp;Yellow WIN";
		}
		$("#player").html(winner);
		$("#player").addClass("hAnimation");
		$('#myModal').modal()
	}
}

/** refresh UI */
function refreshUI(){
	
	for(ligne=0; ligne < 6; ligne++){
		for(colonne=0; colonne < 7; colonne++){
			id="#"+ligne+""+colonne;
			valueTmp = puissance4.tab[ligne][colonne];
			if(valueTmp == "R"){
				$(id).html(redImg);
			}else if(valueTmp == "Y"){
				$(id).html(yellowImg);
			} else{
				$(id).html(whiteImg);
			}
		}	
	}
	
	//check max. in a column: Disable button
	for(colonne = 0; colonne < 7; colonne++){
		if(puissance4.tab[0][colonne] != ""){
			$("#btn"+colonne).hide();
		}
	}
	
	if(puissance4.player == "R"){
		$("#player").html(redImg);
	}else{
		$("#player").html(yellowImg);
	}
	
	showWinner();
}

function getTopColumn (colonne){
	for(ligne = 5; ligne >=0 ; ligne--){
		if(puissance4.tab[ligne][colonne] == ""){
			return ligne;
		}
	}
}


function playColumn(column){
	
	if(puissance4.winner != ""){
		showWinner();
		return;
	}
	
	puissance4.play(column);

	//animation token
	var ligne = getTopColumn(column);
	$("#"+ligne+column).addClass("vAnimation");
	if(puissance4.player == "Y"){
		$("#"+ligne+column).html(redImg);
	}
	if(puissance4.player == "R"){
		$("#"+ligne+column).html(yellowImg);
	}
	//refresh UI
	setTimeout(function(){
		refreshUI();
	}, 1000);
	
	
}
