noseX=0;
noseY=0;
difference=0
leftwristX=0
rightwristX=0
function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(500,500)
canvas.position(550,150)
posnet=ml5.poseNet(video,modelloaded)
posnet.on('pose',getposes)
}
function getposes(result){
    if (result.length>0) {
        console.log(result)
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y
        console.log(noseX,noseY)
    leftwristX=result[0].pose.leftWrist.x
    rightwristX=result[0].pose.rightWrist.x
    difference=leftwristX-rightwristX
    }

}

function modelloaded(){
    console.log("poseNet is started")
}
function draw(){
background('#F487B6')
fill('#FF579F')
square(noseX,noseY,difference)
}