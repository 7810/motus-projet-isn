//variables globales
var zone_mot;
var mot_joueur;
var mot_ordinateur;
var essais;
var k=150; //k: lignes (coordonées y)
var T1 = []
var T2 = []
var i = 0
var j = 0
var D = 0

function setup() { //menu du jeu
  createCanvas(520, 700);
  background('rgb(115, 194, 251)');
  textSize(20);
  text('Mode classique :',50, 200);
  text('Mode illimité :',300,200);
  textSize(60);
  textStyle(BOLD);
  text('MOTUS',150,70);
  var facile = createButton('Facile');
  var normal = createButton('Normal');
  var difficile = createButton('Difficile');
  facile.position(75, 220);
  normal.position(75, 300);
  difficile.position(75,380);
  facile.mousePressed(interface_facile);
  normal.mousePressed(interface_normale);
  difficile.mousePressed(interface_difficile);
  facile.size(100,50);
  normal.size(100,50);
  difficile.size(100,50);
  facile.style('background-color',color(46, 201, 122));
  normal.style('background-color',color(236, 170, 0));
  difficile.style('background-color', color(236, 0, 0));
  var mode_illimité = createButton('Mode illimité');
  mode_illimité.position(315, 300);
  mode_illimité.mousePressed(interface_illimité);
  mode_illimité.size(100,50);
  mode_illimité.style('background-color',color(236, 170, 0));

}
 
function interface_facile(){}

function interface_normale(){
  background('rgb(115, 194, 251)');
  rect(50,150,400,350);
  //fond blanc de la grille
  for (var h = 0; h<=350; h= h+50) {
  //h est le nombre qui sépare les lignes horizontales
    line(50, 150 +h ,450, 150+h);
  }
  for (var v = 0; v<=400; v= v+50) {
  //v est le nombre qui sépare les lignes verticales
    line(50 +v , 150, 50 +v, 500);
  }
    //création de la grille de 8 colones et 7 lignes (carré 50*50) + d'un fond blanc derrière la grille
  
 var tab_A = ['accoudez', 'aggraver','alléluia','baladeur','bestiole','boulange','cacaoyer','catcheur','costumes','descente','délégués','dînettes','embossés','exclamez','évoquant','farfadet','foreuses','féodales','galloise','goupille','gêneuses','handball','humecter','héroïque','immature','inhumain','ivrognes','jaugeait','jonchant','jurerons','kakatoès','klaxonna','kérosène','lamproie','listings','lézardes','malaxeur','mensuels','méprisée','naviguât','novation','névrosés','obsèques','oncogène','oxygéner','paladins','pivotant','pénibles','quarrant','quignons','quêteurs','racismes','renfoncé','révision','salariat','soutenez','sûrement','tamiseur','toperons','tôleries','ulcèrent','uranisme','usurpées','vaisseau','violines','vétérans','wagonnée','wallonne','witloofs','xanthine','ximénies','xylidine','yachtman','yttriums','yearling','zieutais','zoologie','zozotait'] ;
  zone_mot=createInput();
  //variable disponible dans toutes les fonctions
  zone_mot.position(150,100);
  zone_mot.size(200);
  textSize(60);
  textStyle(BOLD);
  text('MOTUS',150,70);
  textSize(15);
  text('⚠ Attention le mot choisit doit être de 8 lettres ⚠',85,550);
  var valider=createButton('OK');
  valider.position(365,100);
  valider.mousePressed(commencer_normal);
  mot_ordinateur=random(tab_A);
  //selectionne aléatoirement un mot du tableau A qui va ensuite s'afficher dans la grille
  mot_ordinateur.toUpperCase();
  premierCaractere = mot_ordinateur.charAt(0).toUpperCase();
  textSize(20);
  text(premierCaractere,68,180);
// la première lettre du mot de l'ordinateur est inscrite dans la première case de la grille
  
  textSize(20);
  text('Lettres en             : sont dans le mot et bien placées', 10,600);
  fill(0, 160, 0);
  text('vertes',115,600);
  fill(0,0,0);
  text('Lettres en             : sont dans le mot mais ne sont pas', 10, 620);
  fill(255, 200, 0);
  text('jaunes',115,620);
  fill(0,0,0);
  text('bien placées',190,640);
  text('Lettres non colorées : ne sont pas dans le mot',10,660);
  stroke(0, 160, 0);
  line(115,602,175,602);
  stroke(255, 200, 0);
  line(115,622,175,622);
}

function commencer_normal(){
//fonction prenant en compte le mot choisit et validé par le joueur  
  
  mot_joueur = zone_mot.value();
  print (mot_joueur);
  //mot choisit par le joueur dans la zone de texte
  
  if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
  zone_mot.value('');
  alert('Veuillez entrer un mot de 8 lettres');
  }
  
  if(mot_joueur /*comporte un caractère interdit*/){
  zone_mot.value('');
  alert('Veuillez ne pas entrer des caractères autres que des lettres');
  }
  
  traitement_couleurs()
  
}

function traitement_couleurs() { //fonction permettant de traiter les couleurs selon les lettres saisies par le joueur.
  
  //Tableau avec le mot à trouver.
  for (i=0; i<=7; i++) {
  T1[i]=mot_ordinateur.charAt(i);     //position du caractere du mot_ordinateur
  }
  
  //Tableau avec le mot saisie par le joueur.
  for (i=0; i<=7; i++) {
  T2[i]=mot_joueur.charAt(i);        //position du caractere du mot_joueur
  }
  
  //Algorithme de traitement des couleurs selon les lettres saisies par le joueur.
  for (i=0; i<=7; i++) {
    
  //Partie pour définir la couleur des lettres bien placées (lettres en vertes).
  if (T2[i]==T1[i]) {         //si la position du caractere du mot_joueur correspond à la position du caractere du mot_ordinateur alors la lettre est verte.
  fill(0, 160, 0);
  text(T2[i],25,25);
  }
    
   //Partie pour definir la couleur des lettres qui sont dans le mot mais au mauvais endroit (lettres en jaunes).
  for (j=0; j<=7; j++) {
  if (T2[i]==T1[j] && j!=i) {  //si la lettre est dans le mot mais au mauvais endroit alors la lettre est jaune.
  fill(255, 200, 0);
  text(T2[i],50,25);
  }
  }
    
  //Partie pour définir la couleur des lettres mauvaises (lettres non colorées).
  for (j=0; j<=7; j++) {
  if (T2[i]!=T1[j]) {
  D=D+1;
  }
    
  if (D==8) { //compteur D pour vérifier que la lettre selectionée est bien   différente de toute les autres.
  fill(0,0,0);
  text(T2[i],75,25);
  }
  }
  }
}

function interface_difficile(){}
function interface_illimité(){}