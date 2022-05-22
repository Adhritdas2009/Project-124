function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(800, 250);
    video=createCapture(VIDEO);
    video.position(100, 250);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(canvas, 0, 0, canvas.width, canvas.height)
}

function modelLoaded(){
    console.log('The model has been loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}