/**
 * Classe Puissance 4.
 **/
function Puissance4 () {

  /** the puissance4 tab*/
  this.tab = "";

  /** the winner if exist (R / Y)*/
  this.winner = "";

  /** the current player: turn model: "R", "Y", "" */
  this.player = "R";

  /** init model */
  Puissance4.prototype.init = function () {
    this.tab = new Array(6);
    for (ligne = 0; ligne < 6; ligne++) {
      this.tab[ligne] = new Array(7);
      for (colonne = 0; colonne < 7; colonne++) {
        this.tab[ligne][colonne] = "";
      }
    }
  }
  // and call it just after...
  this.init();

  /** change player 1 turn on 2. */
  Puissance4.prototype.changePlayer = function () {
    if (this.player == "R") {
      this.player = "Y";
    }
    else {
      this.player = "R";
    }
  }

  /** Play */
  Puissance4.prototype.play = function (colonne) {

    this.tab[this.premiereCaseVide(colonne)][colonne]= this.player;

    //@TODO check if there is a winner. Ex:
    //this.checkWinner();

    this.changePlayer();

    return this;
  }

  Puissance4.prototype.premiereCaseVide = function (colonne) {
    let lastline = 5;
    for (let i = 5; i > 0; i--) {
      if (this.tab[i][colonne] != "") {
        lastline--
      }
    }
    return lastline;
  }


}
