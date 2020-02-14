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
  mode_score= createButton('Mode score')
  mode_score.position(225, 550)
  mode_score.mousePressed(modescore)
  mode_score.size(100,50)
  mode_score.style('background-color', color(110, 11, 20))
}