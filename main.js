noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftWirstX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWirstX = results[0].pose.leftWrist.x;
        rightWrist - results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#FF0000');

    document.getElementById("font_size").innerHTML = ("Font-Size Will Be - " + difference + "px");
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);

}