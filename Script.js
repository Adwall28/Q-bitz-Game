function timer(){
    var Min = 0o0;
    var Sec = 0o0;
    
    var timer = setInterval(function(){
        let Time = Min + ':' + Sec;
        $('#Timer').text(Time);
        if (Sec < 10){
            Time = Min + ':0' + Sec;
        }
        if (Sec >= 60) {
            Min++;
            Sec=0;
        }
        Sec++;
    }, 1000);
};

function CubeStartingLocation(){

    let Width = window.innerWidth;
    let Height = window.innerHeight;

    let x = Math.floor(Math.random() * Width + 1);
    let y = Math.floor(Math.random() * Height + 1); 

    if (y<(Height/3)){
        y = y + (Height/4);
    }

    if (x>(Width/3) && x<(Width*2/3)){
        if(x>(Width/3)){
            x = x - Width/3;
        }
        if(x<(Width*2/3)){
            x = x + Width*2/3;
        }

    }

    if (x==Width){
        x = x - 100;
    }

    console.log("x: " + x);
    console.log("y: " + y);

    $(".CubeSide").css({
        left:  x,
        top:   y,
        });
}

const PlayerTileArray = ["CubeOne", "CubeTwo", "CubeThree", "CubeFour", 
                        "CubeFive", "CubeSix", "CubeSeven", "CubeEight",
                        "CubeNine", "CubeTen", "CubeEleven", "CubeTwelve",
                        "CubeThirteen", "CubeFourteen", "CubeFifteen", "CubeSixteen"];


const MiniTileArray = ["MiniCubeOne", "MiniCubeTwo", "MiniCubeThree", "MiniCubeFour", 
                        "MiniCubeFive", "MiniCubeSix", "MiniCubeSeven", "MiniCubeEight",
                        "MiniCubeNine", "MiniCubeTen", "MiniCubeEleven", "MiniCubeTwelve",
                        "MiniCubeThirteen", "MiniCubeFourteen", "MiniCubeFifteen", "MiniCubeSixteen"];

//Making an Array of all the cube sides
const DiceSide = ["#TopSide", "#LeftSide", "#RightSide", "#FrontSide", "#BottomSide", "#BackSide"]

//Hiding all the cubesides until they are to be shown
$("" + DiceSide[0] + "").hide();
$("" + DiceSide[1] + "").hide();
$("" + DiceSide[2] + "").hide();
$("" + DiceSide[3] + "").hide();
$("" + DiceSide[4] + "").hide();
$("" + DiceSide[5] + "").hide();

 //Making a Random Number between 0 and 5
 let n = Math.floor(Math.random() * 6);

//Using the Random Number to show a random side of the cube
$("" + DiceSide[n] + "").show();

var GameEnded = false;


function CubeMovement(element){

    var HoldingDown;
    var PickUpSound = new Audio("Sounds/PickUpCube.mp3");
    var CubeRollSound = new Audio("Sounds/DiceRoll.mp3");
    var PutDownSound = new Audio("Sounds/PutDownCube.mp3");
    /*
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.mousedown (function(e) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        // call a function whenever the cursor moves:
      });

      element.mousemove (function(e) {
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
      });

      element.mouseup (function(e) {
        // stop moving when mouse button is released:
        document.mouseup = null;
        document.mousemove = null;
      });
*/

    element.mousedown(function(){

        console.log("Holding down");
        PickUpSound.play();
        HoldingDown = true;

        //while (HoldingDown==true){
            

            document.addEventListener('keydown', (event) => {
                CubeRollSound.play();
                var name = event.key;

                if (name == 'w'){
                    $("" + DiceSide[n] + "").hide();
                    if (n == 0){
                        n = n + 3;
                        $("" + DiceSide[n] + "").show();
                    }
                    else if (n==1){
                        n = n + 3
                        $("" + DiceSide[n] + "").show();
                    }   
                    else if (n==2){
                        
                        
                    }
                    else{
                        $("" + DiceSide[n+1] + "").show();
                    }
                    console.log("w");
                }
                if (name == 'a'){
                    $("" + DiceSide[n] + "").hide();
                    if (n == 5){
                        n = n - 4;
                        $("" + DiceSide[n] + "").show();
                    }
                    else{
                        n = n + 1;
                        $("" + DiceSide[n] + "").show();
                    }
                    console.log("a");
                }
                if (name == 's'){
                    $("" + DiceSide[n] + "").hide();
                    if (n == 5){
                        n = n - 4;
                        $("" + DiceSide[n] + "").show();
                    }
                    else{
                        n = n + 1;
                        $("" + DiceSide[n] + "").show();
                    }
                    console.log("s");
                }
                if (name == 'd'){
                    $("" + DiceSide[n] + "").hide();
                    if (n == 5){
                        n = n - 4;
                        $("" + DiceSide[n] + "").show();
                    }
                    else{
                        n = n + 1;
                        $("" + DiceSide[n] + "").show();
                    }
                    console.log("d");
                }

                if (name == 'r'){
                    console.log("r");
                    $("" + DiceSide[n] + "").style.transform = "rotate(90deg)";
                }
            });

              //break;
        //};   
    });

    element.mousemove(function(event){
            if (HoldingDown == true){
                element.css({
                left:  (event.pageX) -60,
                top:   (event.pageY) -60
                });
            };
    });

    element.mouseup(function(event){
        $(".CubeSide").css({
            left:  (event.pageX) -60,
            top:   (event.pageY) -60
            });
        console.log("stopped holding down");
        PutDownSound.play();
        HoldingDown = false;
      });

};

//var ButtonSound = new Audio("Sounds/ButtonPressed.mp3");

function GameMechanic(){
    $("#ExitButton").click(function(){
            //ButtonSound.play();
            window.open("", "_self");
            window.close();
    });
};

$(document).ready(function(){
        timer();
        CubeStartingLocation();
        setInterval(CubeMovement($(".CubeSide")), 100);
        setInterval(GameMechanic, 10);
});