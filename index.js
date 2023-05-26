// Získání odkazu na div s ID "goal"
var goalDiv = document.querySelector('#goal-id');

// Vytvoření prvku <table>
var table = document.createElement('table');
table.className = 'net';

// Generování řádků a buněk
for (let i = 0; i < 15; i++) {
  var row = document.createElement('tr');
  row.className = '';

  for (let j = 0; j < 43; j++) {
    var cell = document.createElement('td');
    cell.className = '';
    row.appendChild(cell);
  }

  table.appendChild(row);
}

// Přidání tabulky do divu
goalDiv.appendChild(table);


var ball = document.getElementById("ball");
var canMove = true;

function moveBallUp() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-500%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    scoreGoal()
}


function moveBallRight() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(450%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    scoreGoal()
}

function moveBallLeft() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(-350%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    scoreGoal()
}

function moveBallDown() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-300%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    scoreGoal()
}

function ballOpacity(){
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 5 sekund
    ball.style.transition = "opacity 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.opacity = "0.5";
}

function scoreGoal() {
    var goalCount = document.getElementById("scored").innerHTML;
    goalCount = Number(goalCount) + 1;
    document.getElementById("scored").innerHTML = goalCount;
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

