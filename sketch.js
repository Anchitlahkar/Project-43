var hr, min, sc

function setup() {
  createCanvas(800, 750);

  angleMode(DEGREES)

}

function draw() {
  background(0);

  translate(width / 2, height / 2 - 200)
  rotate(-90)

  // assigning hour, minute, seconds
  let hr = hour();
  let mn = minute();
  let sc = second();


  //Creating seconds 
  strokeWeight(8)
  noFill()
  stroke(246, 246, 0)
  let end1 = map(sc, 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, end1)

  push()
  rotate(end1)
  stroke(246, 246, 0)
  line(0, 0, 100, 0)
  pop()


  // Creating minutes
  stroke(246, 7, 15)
  let end2 = map(mn, 0, 60, 0, 360)
  arc(0, 0, 280, 280, 0, end2)

  push()
  rotate(end2)
  stroke(246, 7, 15)
  line(0, 0, 75, 0)
  pop()


  //Creating Seconds
  stroke(36, 98, 36)
  let end3 = map(hr % 12, 0, 12, 0, 360)
  arc(0, 0, 260, 260, 0, end3)

  push()
  rotate(end3)
  stroke(36, 98, 36)
  line(0, 0, 50, 0)
  pop()


  //Creating Point
  stroke(255)
  point(0, 0)

  //Displaying Time In Digital form
  push()
  rotate(90)
  fill(255)
  textSize(20)
  noStroke()
  text(hr + " : " + mn + " : " + sc, -50, 300)
  pop()


}