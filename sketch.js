//variables globales
var mot;

function setup() {
  createCanvas(520, 700);
  background('rgb(115, 194, 251)')
  rect(50,150,400,350)
  // fond blanc de la grille
  line(50, 150, 450, 150)
  line(50, 200, 450, 200)
  line(50, 250, 450, 250)
  line(50, 300, 450, 300)
  line(50, 350, 450, 350)
  line(50, 400, 450, 400)
  line(50, 450, 450, 450)
  line(50, 500, 450, 500)
    // lignes horizontales
  line(50, 150, 50, 500)
  line(100, 150, 100, 500)
  line(150, 150, 150, 500)
  line(200, 150, 200, 500)
  line(250, 150, 250, 500)
  line(300, 150, 300, 500)
  line(350, 150, 350, 500)
  line(400, 150, 400, 500)
  line(450, 150, 450, 500)
  // lignes verticales
  //créaction de la grille de 8 colones et 7 lignes + d'un fond blanc derrière la grille
 var tab_A = ['accoudez', 'aggraver','alléluia','baladeur','bestiole','boulange','cacaoyer','catcheur','costumes','descente','délégués','dînettes','embossés','exclamez','évoquant','farfadet','foreuses','féodales','galloise','goupille','gêneuses','handball','humecter','héroïque','immature','inhumain','ivrognes','jaugeait','jonchant','jurerons','kakatoès','klaxonna','kérosène','lamproie','listings','lézardes','malaxeur','mensuels','méprisée','naviguât','novation','névrosés','obsèques','oncogène','oxygéner','paladins','pivotant','pénibles','quarrant','quignons','quêteurs','racismes','renfoncé','révision','salariat','soutenez','sûrement','tamiseur','toperons','tôleries','ulcèrent','uranisme','usurpées','vaisseau','violines','vétérans','wagonnée','wallonne','witloofs','xanthine','ximénies','xylidine','yachtman','yttriums','yearling','zieutais','zoologie','zozotait'] 
  mot=createInput() 
  //variable disponible dans toutes les fonctions
  mot.position(150,100)
  mot.size(200)
  textSize(60)
  text('MOTUS',150,70)
  textStyle(BOLD)
  textSize(15)
  text('⚠ Attention le mot choisit doit être de 8 lettres ⚠',85,550)
  var valider=createButton('OK')
  valider.position(365,100)
  valider.mousePressed(commencer)
  var mot_ordinateur=random(tab_A)
  //selectionne aléatoirement un mot du tableau A qui va ensuite s'afficher dans la grille
  textSize(20)
  text('Lettres en            : sont dans le mot et bien placées', 30,600)
  fill(0, 160, 0)
  text('vertes',130,600)
  fill(0,0,0)
  text('Lettres en             : sont dans le mot mais ne sont pas', 10, 620)
  fill(255, 200, 0)
  text('jaunes',115,620)
  fill(0,0,0)
  text(' bien placées',230,640)
  text('Lettres non colorées : ne sont pas dans le mot',40,660)
  stroke(0, 160, 0)
  line(135,602,190,602)
  stroke(255, 200, 0)
  line(120,622,175,622)

  

  for(var i=0; i<7; i=i+1){ //i est le nombre d'essais
  // quand un essai est fait, passer à la ligne suivante de la grille
  }
  
}

function commencer(){
//fonction prenant en compte le mot choisit et validé par le joueur  
  var mot_joueur= mot.value() ;
  print (mot_joueur)
  //mot choisit par le joueur dans la zone de texte
  if(mot_joueur.length != 8){ //quand le mot n'a pas 8 lettres, message d'erreur
    mot.value('')
  alert('Veuillez entrez un mot de 8 lettres')
  }
  

}