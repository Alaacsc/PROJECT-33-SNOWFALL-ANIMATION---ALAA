var Engine = Matter.Engine;
const World= Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;


var engine, world;
var backgroundImg;
var snowfall = [];
//var bg = "snow6.png";

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  earth = engine.world;
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine); 

        //display the paricles 

        if(frameCount%10===0){
          snowfall.push(new Snowfall(random(10,700),10,10));
       }
     
         for (var s = 0; s < snowfall.length; s++){
          snowfall[s].display();
       }

  //drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/Europe/Madrid");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
    bg = "snow2.jpg";

  }
  else{
    bg = "snow6.jpeg";     

  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}