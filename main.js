var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

var new_screen_width = screen.width - 70;
var new_screen_height = screen.height - 300;
var width = screen.width;
if (width < 992)
{
    document.getElementById("myCanvas").width = new_screen_width;
    document.getElementById("myCanvas").height = new_screen_height;
    document.body.style.overflow = "hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");
    last_position_of_x = etouches[0].clientX - canvas.offsetLeft;
    last_position_of_y = etouches[0].clientY - canvas.offsetTop;
}

function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_touch_x = etouches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = etouches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x= " + last_position_of_x + " y= " + last_position_of_touch_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ")
    console.log("x= " + current_position_of_touch_x + " y= " + current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}
