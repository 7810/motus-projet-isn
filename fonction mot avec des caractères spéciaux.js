  if (!(/^[a-z]+$/i.test(mot_joueur))) { //si le mot du joueur comporte un autre caractère qu'une lettre, affiche une alerte
    //! <-- négation donc si /^[a-z]+$/i.test est vrai il devient faux et inversement 
  zone_mot.value('');
    alert('Veuillez ne pas entrer des caractères autres que des lettres');
  }
