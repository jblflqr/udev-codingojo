/** Useless tool to show model in the console. */ 
function printPuissance4Console(puissance4){
	var delimiter = "---------------------------"
	console.log(delimiter);
	for(ligne=0; ligne < 6; ligne++){
		var resultLine ="";
		for(colonne=0; colonne < 7; colonne++){
			var tmp = puissance4.tab[ligne][colonne];
			if(tmp ==""){
				tmp =" " ;
			}
			resultLine += tmp + " | "; 
		}	
		console.log(resultLine);
		console.log(delimiter);
	}
}

QUnit.test( "First test with QUnit", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "puissance4.Init test", function( assert ) {
	var puissance4 = new Puissance4();
	assert.ok( puissance4.tab[0][0] == "", "Passed!" );
	assert.ok( puissance4.tab[0][0] != "R", "Passed!" );
	assert.ok( puissance4.tab[0][0] != "Y", "Passed!" );
});

QUnit.test( "change player", function( assert ) {
	var puissance4 = new Puissance4();
	assert.equal( puissance4.player, "R", "Red to Yellow!" );
	puissance4.changePlayer();
	assert.equal( puissance4.player, "Y", "Yellow to Red!" );
	puissance4.changePlayer();
	assert.equal( puissance4.player, "R", "Red to Yellow!" );
});

QUnit.test( "play test: play 1st colonne with red", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0);
	assert.equal( puissance4.tab[5][0], "R", "Passed!" );
});


QUnit.test( "les jetons s'empilent correctement", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0);
	puissance4.play(0);
	assert.equal( puissance4.tab[5][0], "R", "Passed!" );
	assert.equal( puissance4.tab[4][0], "Y", "Passed!" );

});

QUnit.test( "detection de la premiere case vide", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0);
	puissance4.play(0);
	puissance4.play(0);
	puissance4.play(0);

	assert.equal( puissance4.premiereCaseVide(0), 1, "Passed!" );
});


QUnit.test( "joueur gagnant sur la premiere colonne", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0); // R
	puissance4.play(1); // Y
	puissance4.play(0); // R
	puissance4.play(1);	// Y
	puissance4.play(0);	// R
	puissance4.play(1);	// Y
	puissance4.play(0);	// R

	assert.equal( puissance4.checkWinnerColonne(0), true, "Gagnant sur la première colonne" );
	assert.equal( puissance4.checkWinnerColonne(1), false, "Perdant sur la seconde colonne" );

});



QUnit.test( "joueur perdant si aucun 4 jeton consecutif", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0); // R
	puissance4.play(1); // Y
	puissance4.play(0); // R
	puissance4.play(0);	// Y
	puissance4.play(0);	// R
	puissance4.play(1);	// Y
	puissance4.play(0);	// R

	assert.equal( puissance4.checkWinnerColonne(0), false, "Gagnant sur la première colonne" );
	assert.equal( puissance4.checkWinnerColonne(1), false, "Perdant sur la seconde colonne" );

});


QUnit.test( "joueur gagnant sur une colonne ", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(3); // R
	puissance4.play(1); // Y
	puissance4.play(3); // R
	puissance4.play(1);	// Y
	puissance4.play(3);	// R
	puissance4.play(1);	// Y
	puissance4.play(3);	// R

	assert.equal( puissance4.checkWinner(), true, "Gagnant sur la 3eme colonne" );
});

QUnit.test( "joueur gagnant sur la ligne du bas ", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0); // R
	puissance4.play(0); // Y
	puissance4.play(1); // R
	puissance4.play(1);	// Y
	puissance4.play(2);	// R
	puissance4.play(2);	// Y
	puissance4.play(3);	// R

	assert.equal( puissance4.checkWinner(), true, "Gagnant sur la ligne du bas" );
});

QUnit.test( "joueur gagnant sur une ligne", function( assert ) {
	var puissance4 = new Puissance4();
	puissance4.play(0); // R
	puissance4.play(0); // Y
	puissance4.play(1); // R
	puissance4.play(1);	// Y
	puissance4.play(2);	// R
	puissance4.play(2);	// Y
	puissance4.play(0);	// R
	puissance4.play(3);	// Y
	puissance4.play(1); // R
	puissance4.play(3);	// Y

	assert.equal( puissance4.checkWinner(), true, "Gagnant sur une ligne" );
});


QUnit.test( "joueur gagnant sur une diagonale", function( assert ) {
	var puissance4 = new Puissance4();
	//2 y r
	//3 r y
	//4 y r y r
	//5 r r y y
	//  0 1 2 3

	// 2 0 3 1 4 2 5 3
	puissance4.play(0); // R
	puissance4.play(0); // Y
	puissance4.play(0); // R
	puissance4.play(0); // Y

	puissance4.play(1); // R
	puissance4.play(2); // Y
	puissance4.play(1); // R
	puissance4.play(1); // Y

	puissance4.play(1); // R
	puissance4.play(3); // Y

	puissance4.play(3);	// R
	puissance4.play(2);	// Y
	console.log(Puissance4.tab)


	assert.equal( puissance4.checkWinnerDiagonale(2,0), true, "Gagnant sur une diagonale" );
});
