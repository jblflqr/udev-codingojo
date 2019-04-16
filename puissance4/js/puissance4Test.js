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


