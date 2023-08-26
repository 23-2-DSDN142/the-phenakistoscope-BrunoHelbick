const SLICE_COUNT = 12;
let total = 0;
let filler1 = 255;
let filler2 = 255;
let filler3 = 255;
let noiseOffset = 0;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
  earthImg = loadImage('assets/earth.png');
  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries
  var layer1 = new PLayer(faces);
  
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 0, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  var layer2 = new PLayer(sun);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
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
  strokeWeight(15);


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
  
  image(earthImg, 300, 300, 100, 100);
}






