function preload(){

}
 function setup(){
     canvas = createCanvas(640,500);
     canvas.position(100,200);
     video = createCapture(VIDEO);
    video.height();

    color = "";

 }

 function draw()
 {
     image(video,0,0,500,500);
     tint(tint_color);
 }
 function snapshot()
     {
         save("project.png")
     }
     function filter()
     {
         tint_color = document.getElementById("color_name").value;
     }
 