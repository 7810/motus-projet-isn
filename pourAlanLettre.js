//variables globales
var mot;
var mot_joueur; 
var mot_ordinateur;
var i=150; //i: lignes (coordonées y)
var essais;

function setup() { //menu du jeu
  createCanvas(520, 700);
  background('rgb(115, 194, 251)')
  textSize(20)
  text('Mode classique :',50, 200)
  text('Mode illimité :',300,200)
  textSize(60)
  text('MOTUS',150,70)
  textStyle(BOLD)
  var facile = createButton('Facile')
  var normal= createButton('Normal')
  var difficile =createButton('Difficile')
  facile.position(75, 220)
  normal.position(75, 300)
  difficile.position(75,380)
  facile.mousePressed(interface_facile)
  normal.mousePressed(interface_normale)
  difficile.mousePressed(interface_difficile)
  facile.size(100,50)
  normal.size(100,50)
  difficile.size(100,50)
  facile.style('background-color',color(46, 201, 122))
  normal.style('background-color',color(236, 170, 0))
  difficile.style('background-color', color(236, 0, 0))
  var mode_illlimité = createButton('Mode illimité')
  mode_illlimité.position(315, 300)
  mode_illlimité.mousePressed(interface_illimité)
  mode_illlimité.size(100,50)
  mode_illlimité.style('background-color',color(236, 170, 0))

}
 
function interface_facile(){}

function interface_normale(){
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
  
 var tab_A = ['accoudez', 'aggraver','alléluia','baladeur','bestiole','boulange','cacaoyer','catcheur','costumes','descente','délégués','dînettes','embossés','exclamez','évoquant','farfadet','foreuses','féodales','galloise','goupille','gêneuses','handball','humecter','héroïque','immature','inhumain','ivrognes','jaugeait','jonchant','jurerons','kakatoès','klaxonna','kérosène','lamproie','listings','lézardes','malaxeur','mensuels','méprisée','naviguât','novation','névrosés','obsèques','oncogène','oxygéner','paladins','pivotant','pénibles','quarrant','quignons','quêteurs','racismes','renfoncé','révision','salariat','soutenez','sûrement','tamiseur','toperons','tôleries','ulcèrent','uranisme','usurpées','vaisseau','violines','vétérans','wagonnée','wallonne','witloofs','xanthine','ximénies','xylidine','yachtman','yttriums','yearling','zieutais','zoologie','zozotait'] ;
  mot=createInput() ;
  //variable disponible dans toutes les fonctions
  mot.position(150,100);
  mot.size(200);
  textSize(60);
  text('MOTUS',150,70);
  textStyle(BOLD);
  textSize(15);
  text('⚠ Attention le mot choisit doit être de 8 lettres ⚠',85,550);
  var valider=createButton('OK');
  valider.position(365,100);
  valider.mousePressed(commencer_normal);
  mot_ordinateur=random(tab_A);
  //selectionne aléatoirement un mot du tableau A qui va ensuite s'afficher dans la grille
   var chaine = mot_ordinateur
   mot_ordinateur.toUpperCase()
  premierCaractere = chaine.charAt(0).toUpperCase()
    textSize(20)
  text(premierCaractere, 68,180)
// la première lettre du mot de l'ordinateur est inscrite dans la première case de la grille
  
 for(var i=0; i<7; i=i+1){ //i est le nombre d'essais
  // quand un essai est fait, passer à la ligne suivante de la grille
 
  }
  
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
//fonction prenant en compte le mot choisit et validé par le joueur  
  mot_joueur= mot.value();
  print (mot_joueur);
  //mot choisit par le joueur dans la zone de texte
  if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
    mot.value('');
  alert('Veuillez entrer un mot de 8 lettres');
  }
  
  if(mot_joueur /*comporte un caractère interdit*/){
  mot.value('')
    alert('Veuillez ne pas entrer des caractères autres que des lettres')
  }
  
    for(essais=0; essais<=8; essais=essais+1){ 
  // quand un essai est fait, passer à la ligne suivante de la grille
  mot_ordinateur=text(/*mot i-50*/ 50, i+50)
  }
  if(essais==8){
    //quand les 7 essais sont réalisés affiche une alerte pour donner le mot
  alert('Le mot était: ' , mot_ordinateur)
  }
}

function interface_difficile(){}
function interface_illimité(){}





