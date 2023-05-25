var ball = document.getElementById("ball");
var canMove = true;

function moveBallUp() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 1s, width 1s, height 1s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-500%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
}


function moveBallRight() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 1s, width 1s, height 1s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(450%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
}

function moveBallLeft() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 1s, width 1s, height 1s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(-350%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
}

function moveBallDown() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 1s, width 1s, height 1s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-300%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
}

function ballOpacity(){
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "opacity 1s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.opacity = "0.5";
}


document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            moveBallUp();
        }
        if (event.key === "ArrowLeft") {
            moveBallLeft();
        }
        if (event.key === "ArrowRight") {
            moveBallRight();
        }
        if (event.key === "ArrowDown") {
            moveBallDown();
        }
        // Vynulujeme transformaci a velikost míče po uplynutí 0.5 sekundy
        setTimeout(function() {
            ball.style.transition = ""; // Zrušíme přechodové efekty
            ball.style.transform = ""; // Vynulujeme transformaci
            ball.style.width = ""; // Vynulujeme šířku
            ball.style.height = ""; // Vynulujeme výšku
            ball.style.opacity = ""; // Vynulujeme opacity
            canMove = true;
        }, 4000);


    });
});

