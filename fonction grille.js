function setup() {
  createCanvas(520, 700);
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
}