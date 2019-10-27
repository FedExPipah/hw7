let box;
let playedWish = false;
let value;
let ms;

function preload() {
  cellebee1 = loadImage('HA.png');
  cellebee2 = loadImage('hit.png');
  cellebee3 = loadImage('birth.png');
  cellebee4 = loadImage('wish.png');
  cellebee5 = loadImage('sorry.png');
  cellebee6 = loadImage('count.jpeg');
  cellebee7 = loadImage('chris.png');

  soundFormats("ogg");
  hit = loadSound("ahhhh.ogg");
  soundFormats("wav");
  Bday = loadSound("birthday.wav");
  jingle = loadSound("jingle.wav");
  soundFormats("m4a");
  makewish = loadSound("wish.m4a");
  sorry = loadSound("sorry.m4a");
  chris=loadSound("Chris.m4a");
}

function setup() {
  createCanvas(720, 600);
  hello = createAudio('intro.m4a');
  hello.autoplay(true);
  box = cellebee1;
}

function draw() {
  ms = millis();
  background(255);
  strokeWeight(2.5);
  image(box, width / 2 - box.width / 7, height / 3.5, box.width / 4, box.height / 4);

  textSize(25);
  strokeWeight(3);
  stroke(0);
  fill(216,191,216);
  text('C e l l e b e e', 265, 100);
  
  //time
  //print('time:'+ms);
  let timing = ms - value;
  if (timing >= 5000) {
  playedWish = true;
  print("true");
 }
  
  fill(255, 204, 229);
  ellipse(240, 130, 40, 40);

  fill(204, 255, 204);
  text('B', 232, 139);

  fill(204, 225, 204);
  ellipse(440, 130, 40, 40);

  fill(255, 204, 229);
  text('C', 432, 139);

  if (playedWish) {
    ellips();
  }

  if (mouseX > 300 && mouseX < 500 & mouseY > 600 & mouseY > 700) {
    if (mouseIsPressed) {
      playedWish = true;
    }
  }

  if (mouseIsPressed) {
    background(255);
    //   box=cellebee2
    image(cellebee2, 220, height / 2, cellebee2.width / 4, cellebee2.height / 4);
    hit.play();
    stroke(0);
    fill(221,168,221);
    text('ahhhh!!!!', 285, 250, 100);
  }
}

function keyPressed() {
  if (key === "b") {
    Bday.play();
    Bday.onended(wish);
    print("checked");
    background(255);
    box = cellebee3;
    //white background to cover up B 

  }

  if (key === "c") {
    jingle.play();
    chris.play();
    jingle.onended(wish);
    print("checked");
    background(255);
    box = cellebee7;
  }
}

function wish() {
  value = millis().toString();
  print(value);
  box = cellebee4;
  makewish.play();
  makewish.onended(img);

}

function img() {
 box = cellebee6;
  //image(cellebee6, 220, height / 2, cellebee6.width / 4, cellebee6.height / 4);
}

function ellips() {
    box = cellebee5;
  let playing = sorry.isPlaying();
  if (!playing) {
    sorry.play();
    playedWish = false;
  }
}
