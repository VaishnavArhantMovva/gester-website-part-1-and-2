function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotResults);
}

function draw()
{
    image(video,0,0,300,300);
}

function modelloaded()
{
    console("model has been loaded");
}
noseX = 0;
noseY = 0;

function gotResults(results)
{
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX="+ noseX+",noseY="+ noseY);
}

function snapshot() {
    save("spyware_exe.png");
}