function setup() {
  createCanvas(400, 400);
   if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
    mot.value('');
  alert('Veuillez entrer un mot de 8 lettres');
  }
}