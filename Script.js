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

function CubeMovement(){

    $(".CubeSide").mousedown(function(){

        console.log("Holding down");

        //let HoldingDown = true;

        //while (HoldingDown==true){
            

            document.addEventListener('keydown', (event) => {
                var name = event.key;
                var code = event.code;
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

            $(".CubeSide").mousemove(function(event){
                $(".CubeSide").css({
                left:  (event.pageX) -60,
                top:   (event.pageY) -60
                });
            });

            $(".CubeSide").mouseup(function(event){
                $(".CubeSide").css({
                    left:  (event.pageX) + 1 ,
                    top:   (event.pageY) + 1 
                    });
                console.log("stopped holding down");
              });
              //break;
        //};   
    });

};

function GameMechanic(){
    $("#ExitButton").click(function(){
            window.open("", "_self");
            window.close();
    });
};

$(document).ready(function(){
        timer();
        CubeStartingLocation();
        setInterval(CubeMovement, 50);
        setInterval(GameMechanic, 10);
});