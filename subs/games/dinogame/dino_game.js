var c = document.getElementById("character");
var o = document.getElementById("obs");
var count = 0;

function jump() {
    if (c.classList == "animate") {
        return;
    }

    c.classList.add("animate"); //ading animate cls

    setTimeout(function () {
        c.classList.remove("animate"); //animate wil b removed aftr 500ms
    }, 500);
}

var gameOver = setInterval(function () {

    let cTop = parseInt(window.getComputedStyle(c).getPropertyValue("top"));
    let oLeft = parseInt(window.getComputedStyle(o).getPropertyValue("left"));

    if (oLeft < -10 && oLeft > -40 && cTop >= 100) {

        o.style.animation = "none";

        alert("Game Over , Score : " + Math.floor(count / 100));
        count = 0;
        o.style.animation = "block 2s infinite linear";
    }
    else {
        count++;
        document.getElementById("score").innerHTML = Math.floor(
            count / 100)
    }
}, 20);