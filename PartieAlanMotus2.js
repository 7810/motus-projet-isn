function traitement_couleurs(motO,motJ) { //fonction permettant de traiter les couleurs selon les lettres saisies par le joueur.
  
  var T1 = []               //tableau du mot_ordinateur
  var T2 = []               //tableau du mot_joueur
  var grille_test = []      //tableau caractère vrai ou faux
  
  //Tableau avec le mot à trouver.
  for (i=0; i<=7; i++) {
  T1[i]=motO.charAt(i);     //position du caractere du mot_ordinateur
  }
  
  //Tableau avec le mot saisie par le joueur.
  for (i=0; i<=7; i++) {
  T2[i]=motJ.charAt(i);     //position du caractere du mot_joueur
  grille_test[i]=true;
  grille_position[i]=0;
  }
  
  for (i=0; i<=7; i++) { //Partie pour définir la couleur des lettres bien placées (lettres en vertes).
    
    if (grille_test[i]==true && T2[i]==T1[i]) {         //si la position du caractere du mot_joueur correspond à la position du caractere du mot_ordinateur alors la grille_position sera égale à 1. De plus la grille_test[i] passera à false empechant ainsi la boucle de se répéter.
      grille_position[i]=1;
      grille_test[i]=false;
    }
  }
  
  for (i=0; i<=7; i++){ //Partie pour definir la couleur des lettres qui sont dans le mot mais au mauvais endroit (lettres en jaunes).

    for (j=0; j<=7; j++) {
      if (grille_test[j]==true && T2[i]==T1[j] && j!=i) {  //si la lettre est dans le mot mais au mauvais endroit alors la grille_position sera égale à 2. De plus la grille_test[i] passera à false empechant ainsi la boucle de se répéter.
        grille_position[i]=2;
        grille_test[i]=false;
      }
    }
  }
  console.log(grille_position);
  console.log(grille_test);
}

/*
    //Partie pour définir la couleur des lettres mauvaises (lettres non colorées).
    for (j=0; j<=7; j++) {
      if (grille_test[i]==true && T2[i]!=T1[j]) {  //si la lettre n'est pas dans le mot alors la grille_position sera égale à 3. De plus la grille_test[i] passera à false empechant ainsi la boucle de se répéter.
        grille_test[i]=false;
      }
    }
  }
  */


function interface_difficile(){}

function affichage(mot,ligne){

  for(var colonne = 0 ; colonne<=7; colonne=colonne+1){ //colonne est le nombre de caractères
  // quand un essai est fait, passer à la ligne suivante de la grille et stocker les caractères
    
    if( grille_position[colonne] == 0 ) {    //les lettres correspondant à la grille position 0 ne serons pas colorées (lettres noirs).
        fill(0,0,0);
      }
    
    if( grille_position[colonne] == 1 ) {    //les lettres correspondant à la grille position 1 serons vertes.
        fill(0, 160, 0);
      }
    
    if( grille_position[colonne] == 2 ) {    //les lettres correspondant à la grille position 2 serons jaunes.
        fill(255, 200, 0);
      }
    
    text(mot[colonne].toUpperCase(),68 + 50*colonne, 180+ligne*50);
  }
}