//Israel Ruttenberg 11/20/2016 C S 8 1
var cmd = 0;
var pos = 0;
var id;
function moveDog() {
    var Robot = document.getElementById("robot");
    var btnDog = document.getElementById("controlDog");
    cmd++;
    if(cmd % 2) {
        id = setInterval(frame, 5);
        btnDog.innerHTML = "Stop";
    }else{
        btnDog.innerHTML = "Start";
        clearInterval(id);
    }
    function frame() {
        if (Number(Robot.style.left.substr(0, Robot.style.left.indexOf("p"))) == window.innerWidth) {
            pos = -400;
            Robot.style.left = pos + 'px';
        } else {
            pos++;
            Robot.style.left = pos + 'px';
        }
    }
}