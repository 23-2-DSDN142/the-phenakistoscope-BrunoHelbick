const SLICE_COUNT = 12;
let total = 0;
let filler1 = 255;
let filler2 = 255;
let filler3 = 255;
let noiseOffset = 0;
let noiseScale = 0.1;
let segment =0;
let counter= 12;
let counterDirection = 1;
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
  // Load images
  earthImg = loadImage('assets/earth.png');
  mercury = loadImage('assets/mercury.png');
  venus = loadImage('assets/venus.png');
  saturn = loadImage('assets/saturn.png');
  mars = loadImage('assets/mars.png');
  uranus = loadImage('assets/uranus.png');
  neptune = loadImage('assets/neptune.png');
  
  // Create a layer for the whole circle background, ignoring the boundaries
  var backgroundLayer = new PLayer(null, 15);  
  var meteoritelayer = new PLayer(meteorite);
  meteoritelayer.mode(SWIRL(1));
  meteoritelayer.set_boundary(0, 400 );
  // Create a layer for faces with swirl mode
  var facesLayer = new PLayer(faces);
  facesLayer.mode(SWIRL(5));
  facesLayer.set_boundary(0, 1000);
  // Create a layer for planets
  var planetsLayer = new PLayer(planets);
  var sphereLayer = new PLayer(spheres);
  sphereLayer.mode(RING);
  sphereLayer.set_boundary(0, 5);
  // Create a layer for squares with ring mode
  var squaresLayer = new PLayer(squares);
  squaresLayer.mode(RING);
  squaresLayer.set_boundary(0, 400);
  
  // Create a layer for the sun with ring mode
  var sunLayer = new PLayer(sun);
  sunLayer.mode(RING);
  sunLayer.set_boundary(0, 400);;
  
  
}


function faces(x, y, animation, pScope){
  // strokeWeight(10);
  // line(0,0,100,100);
  fill(255, 215, 0);

  // ellipse(0,0,700,700); // draw head
  // fill(30);
  // ellipse(-10,-10,10,10); //draw eye
  // ellipse(10,-10,10,10); // draw eye
  // arc(0,10,20,10,0,180); // draw mouth
  
  for(let i =0;i<20;i++){
    for(let z =0;i<20;i++){
    let g = random(-5,2);
    if(g>1){textSize(100);
      fill(255-i*6, 215-i*6, i*6);
      ellipse( i*30, i*30,20,20);
    }}}
    


  
  
 
}


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  // let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;
  
  total++;
  // fill(66, 135, 245)
  // arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  fill(255, 165, 0);
  strokeWeight(0);


// Define the vertices for the triangle
let x1 = -20; // doubled from -10
let y1 = -100 - animation.wave() * 100; // doubled the wave effect

let x2 = 80; // doubled from 40
let y2 = -200 - animation.wave() * 100; // doubled the wave effect

let x3 = 30; // doubled from 15
let y3 = -300 - animation.wave() * 100; // moved further down and doubled the wave effect

// Draw the triangle
triangle(x1, y1, x2, y2, x3, y3);

}
function sun(x, y, animation, pScope) {
  // Define the outer color
  
  let outerColor = color(255, 190, 0); // Yellow
  let innerColor = color(255, 165, 0); // Orange for depth
  
  // Draw the outer circle for depth
  fill(outerColor);
  ellipse(x, y, 510, 510); // Slightly larger ellipse for depth
  
  // Draw the main circle
  fill(innerColor);
  ellipse(x, y, 500, 500);
  //image(earthImg, 60, 60, 100, 100);
  fill(200,0,0);
  ellipse(100,-90,50,50);
  fill(150,0,0);
  ellipse(100,90,50,50);
}




function planets(x, y, animation, pScope) {
  noFill();
  stroke(255);
  strokeWeight(5);
  ellipse(0,0,600 - animation.wave() * 60,600 - animation.wave() * 60);
  strokeWeight(2);
  ellipse(0,0,800 - animation.wave() * 30,800 - animation.wave() * 30);
  image(mercury, 430 - animation.wave() * 10, 0, 40, 40); // Closest and smallest
  
  image(venus, 500 - animation.wave() * 10, 0, 50, 50); // Next closest, slightly larger

  image(earthImg, 600 - animation.wave() * 10, 0, 55, 55); // Earth, similar to Venus

  image(mars, 660 - animation.wave() * 10, 0, 45, 45); // Mars, smaller than Earth

  image(saturn, 720 - animation.wave() * 10, 0, 90, 90); // Saturn, larger but not the largest

  image(uranus, 800 - animation.wave() * 10, 0, 80, 80); // Uranus, smaller than Saturn

  image(neptune, 900 - animation.wave() * 10, 0, 85, 85); // Neptune, similar to Uranus but farther


segment++; // Increment segment
if (segment >= SLICE_COUNT) { // Reset segment when it reaches SLICE_COUNT
  segment = 0;
}
}

function spheres(x, y, animation, pScope) {
  if (segment == 0) {
  fill(255, 255, 255, 0);
  strokeWeight(5);
  stroke(230);
  
  // Draw ellipses based on counter
  ellipse(0,0,300+40*counter,300+70*counter);

  counter += 0.09 * counterDirection; // Increment or decrement counter
  
  if(counter >= 11 || counter <= 3){ // Reverse direction at max and min
    counterDirection *= -1;
  }}
}
function meteorite(x, y, animation, pScope){
  fill(255, 255, 255, 0);
  stroke(255);
  strokeWeight(3);
  for(let i =0;i<2;i++){
    for(let z =0;z<4;z++){
      ellipse( 900+i*30, 800+z*30,20+z*10,20+i*10);
    }
  }
}
