noseX = 0
noseY = 0

function preload(){
   img = loadImage("hat.png")
}

function setup(){
   canvas = createCanvas(350,350)
   canvas.center()
   
   video = createCapture(VIDEO)
   video.hide()

   poseNet = ml5.poseNet(video,modelLoaded)
   poseNet.on("pose",gotPoses)
}

function draw(){
 image(video,0,0,350,350)
 image(img,noseX,noseY,100,100)
}

function add_filter(){
save("image.png")
}

function modelLoaded(){
   console.log("Model Loaded")
}

function gotPoses(results,error){
   if(error){
      console.log(error)
   }

   else{
      console.log(results)

      noseX = results[0].pose.nose.x - 100;
      noseY = results[0].pose.nose.y - 200;

   }
}