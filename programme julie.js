//variables globales
var zone_mot;
var mot_joueur; 
var mot_ordinateur;
var facile;
var normal;
var difficile;
var mode_score;
var valider;
var compteur_essais;

function setup() { //menu du jeu
  createCanvas(520, 700);
  background('rgb(115, 194, 251)');
  textSize(30);
  text('Niveaux :',210, 200);
  textSize(60);
  text('MOTUS',150,70);
  textStyle(BOLD);
  facile = createButton('Facile');
  normal= createButton('Normal');
  difficile =createButton('Difficile');
  facile.position(225, 250);
  normal.position(225, 330);
  difficile.position(225,410);
  facile.mousePressed(interface_facile);
  normal.mousePressed(interface_normale);
  difficile.mousePressed(interface_difficile);
  facile.size(100,50);
  normal.size(100,50);
  difficile.size(100,50);
  facile.style('background-color',color(46, 201, 122));
  normal.style('background-color',color(236, 170, 0));
  difficile.style('background-color', color(236, 0, 0));
  mode_score= createButton('Mode score');
  mode_score.position(225, 550);
  mode_score.mousePressed(modescore);
  mode_score.size(100,50);
  mode_score.style('background-color', color(110, 11, 20));
}
 
function interface_facile(){}

function interface_normale(){
  facile.style('visibility','hidden');
  normal.style('visibility','hidden');
  difficile.style('visibility','hidden');
  mode_score.style('visibility', 'hidden');
  background('rgb(115, 194, 251)');
  
  rect(50,150,400,350);
 // fond blanc de la grille
  for(var h = 50; h<400; h= h+50){
    //h est le nombre qui sépare les lignes horizontales
    line(50, 150 +h ,450, 150+h);
  }
  for (var v = 50; v<450; v= v+50){
  //v est le nombre qui sépare les lignes verticales
    line(50 +v , 150, 50 +v, 500);
  }
    //créaction de la grille de 8 colones et 7 lignes (carré 50*50) + d'un fond blanc derrière la grille
  
 var tab_A = ['accoudez', 'aggraver','alleluia','baladeur','bestiole','boulange','cacaoyer','catcheur','costumes','descente','delegues','dinettes','embosses','exclamez','evoquant','farfadet','foreuses','feodales','galloise','goupille','geneuses','handball','humecter','heroique','immature','inhumain','ivrognes','jaugeait','jonchant','jurerons','kakatoes','klaxonna','kerosene','lamproie','listings','lezardes','malaxeur','mensuels','meprisee','naviguat','novation','nevroses','obseques','oncogene','oxygener','paladins','pivotant','penibles','quarrant','quignons','queteurs','racismes','renfonce','revision','salariat','soutenez','surement','tamiseur','toperons','toleries','ulcerent','uranisme','usurpees','vaisseau','violines','veterans','wagonnee','wallonne','witloofs','xanthine','ximenies','xylidine','yachtman','yttriums','yearling','zieutais','zoologie','zozotait'] ;
  zone_mot=createInput() ;
  zone_mot.position(150,100);
  zone_mot.size(200);
  textSize(60);
  text('MOTUS',150,70);
  textStyle(BOLD);
  textSize(15);
  text('⚠ Attention le mot choisit doit être de 8 lettres',85,550)
  text('et être écrit en minuscule ⚠',150,570);
  
  valider=createButton('OK');
  valider.position(365,100);
  valider.mousePressed(commencer_normal);
  mot_ordinateur=random(tab_A);
  //selectionne aléatoirement un mot du tableau A qui va ensuite s'afficher dans la grille
  print(mot_ordinateur)
  
      mot_ordinateur.toUpperCase();
  // permet de passer le mot à trouver en majuscule
  premierCaractere = mot_ordinateur.charAt(0).toUpperCase();
  textSize(15);
  text(premierCaractere,380,145);
  text('La première lettre du mot est un :',140,145);
// la première lettre du mot de l'ordinateur est inscrite dans la première case de la grille
  
  textSize(20);
  text('Lettres en            : sont dans le mot et bien placées', 30,600);
  fill(0, 160, 0);
  text('vertes',130,600);
  fill(0,0,0)
  text('Lettres en             : sont dans le mot mais ne sont pas', 10, 620);
  fill(255, 200, 0);
  text('jaunes',115,620);
  fill(0,0,0);
  text(' bien placées',230,640);
  text('Lettres non colorées : ne sont pas dans le mot',40,660);
  stroke(0, 160, 0);
  line(135,602,190,602);
  stroke(255, 200, 0);
  line(120,622,175,622);
}

function commencer_normal(){
//fonction prenant en compte le mot choisit et validé par le joueur pour le mode de jeu "normal" 
  
  mot_joueur= zone_mot.value();
  print (mot_joueur);
  //mot choisit par le joueur dans la zone de texte
  
  if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
    zone_mot.value('');
  alert('Veuillez entrer un mot de 8 lettres');
  }
  
  if (!(/^[a-z]+$/i.test(mot_joueur))) { //si le mot du joueur comporte un autre caractère qu'une lettre, affiche une alerte
    //! <-- négation donc si /^[a-z]+$/i.test est vrai il devient faux et inversement 
  zone_mot.value('');
    alert('Veuillez ne pas entrer des caractères autres que des lettres');
  }
  
  }
  if(compteur_essais==7){
    //quand les 7 essais sont réalisés affiche une alerte pour donner le mot
  alert('Le mot était: ' , mot_ordinateur);
  }

/*function traitement_couleurs(motO,motJ) { //fonction permettant de traiter les couleurs selon les lettres saisies par le joueur.
  
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
  

traitement_couleurs(mot_ordinateur,mot_joueur)
affichage(mot_joueur,compteur_essais, traitement_couleurs)
compteur_essais = compteur_essais + 1 // permet de passer une ligne à chaque clic sur OK
  
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
*/
  
function interface_difficile(){}

function modescore() {
  facile.style('visibility','hidden');
  normal.style('visibility','hidden');
  difficile.style('visibility','hidden');
  mode_score.style('visibility', 'hidden');
  background('rgb(115, 194, 251)');
  textSize(15)
  text ('Score: ', 50, 50)
  var zone_mot2=createInput()
/*if (mot_joueur == mot_ordinateur){
for (var score = 0 ; score>=0 ; score = score + 10){
text (score, 150, 50)
 background('rgb(115, 194, 251)')
  rect(50,150,400,350)
  for(var h = 50; h<400; h= h+50){
    line(50, 150 +h ,450, 150+h);
  }
  for (var v = 50; v<450; v= v+50){
    line(50 +v , 150, 50 +v, 500);
  }
}
}*/
}