var img="";
var status="";


function setup(){
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting objects";


}

function preload(){
img=loadImage("dog_cat.jpg");

}

function draw(){
image(img,0,0,600,400);
fill("#26f70f");
text("Dog",140,80);
noFill();
stroke("#0f0ff7");
rect(125,65,200,300);
fill("#26f70f");
text("Cat",280,120);
noFill();
stroke("#0f0ff7");
rect(260,80,290,300);

}

function modelLoaded(){
    console.log("Modelloaded");
   var status=true;
 objectDetector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
    }
    console.log(result);

}