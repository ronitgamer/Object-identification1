img="";

function setup(){
canvas=createCanvas(640,480);
canvas.center()

}
function preload(){
img=loadImage("dog_cat.jpg");


}

function draw(){
image(img,0,0,640,480);
fill("#ff0000");
text("Dog",75,47);
noFill();
stroke("#ff0000");
rect(30,60,450,350);
}