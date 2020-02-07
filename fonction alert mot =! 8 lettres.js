function setup() {
  createCanvas(400, 400);
  mot_joueur= zone_mot.value();
  print (mot_joueur);
  //mot choisit par le joueur dans la zone de texte
  if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
    zone_mot.value('');
  alert('Veuillez entrer un mot de 8 lettres');
  }
}