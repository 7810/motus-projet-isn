function affichage(mot,ligne){
  // Afficher mot à ligne dans la grille


  for(var colonne = 0 ; colonne<=7; colonne=colonne+1){ //colonne est le nombre de caractères
  // quand un essai est fait, passer à la ligne suivante de la grille et stocker les caractères
   text(mot[colonne],68 + 50*colonne, 180+ligne*50) 
    
    
  }
