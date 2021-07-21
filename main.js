canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=100;
greencar_height=100;
greencar_x=10;
greencar_y=10;
greencar_image="car2.png";



background_image = "parkingLot.jpg";
greencar_image = "car2.png";




function add() {
	bg_tag=new Image();
	bg_tag.onload=uploadBackground;
	bg_tag.src=background_image;
	greencar_tag=new Image(); 
	greencar_tag.onload=uploadgreencar;
	greencar_tag.src=rover_image;
}

f


function uploadBackground() {
	ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_tag, greencar_x, greencar_y, greencar_width, greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}







function up()
{
	function up(){
		if(greencar_y>=0){
			greencar_y=greencar_y-10;
			uploadBackground();
			uploadRover();
}

function down()
{
	function down(){
		if(greencar_y<=500){
			greencar_y=greencar_y+10;
			uploadBackground();
			uploadRover();
		
}

function left()
{
	if(greencar_x>=0){
        greencar_x=rover_x-10;
        uploadBackground();
        uploadRover();
	}
}

function right()
{
	if(greencar_x<=700){
        greencar_x=rover_x+10;
        uploadBackground();
        uploadRover();
	}
}


}
